<template>
    <div class="typing-input">
        <input placeholder="Type your signature"
               v-model="text"
                class="typing-input--input"
                type="text"/>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    computed: {
        text: {
            get() { return this.currentText; },
            set(text) { this.setText(text); }
        },
        ...mapState("typing", [ "currentText" ])
    },
    methods: {
        ...mapMutations("typing", [ "setText" ])
    }
}
</script>

<style lang="scss" scoped>
.typing-input {
    text-align: center;

    &--input {
        width: 100%;
        max-width: 640px;
        padding: 30px 50px;
        border-radius: 180px;
        border: 1px solid $appColor2;
        box-shadow: 0 10px 18px rgba(0, 163, 250, .07), 0 2px 14px rgba(14, 58, 100, .06);
        background-color: $mainBgColor;
        color: $appColor3;
        font-size: $appFontSize1;
    }
}
</style>