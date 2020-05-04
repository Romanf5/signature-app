<template>
    <div class="font-item">
        <div class="font-item--name">
            <span>{{ name }}</span>
        </div>
        <div class="font-item--text">
            <span :style="{ color: color }">{{ text }}</span>
        </div>
        <div class="font-item--download">
            <button @click="start">Download eSignature</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState("typing", {
            text: "currentText",
            color: "currentColor"
        })
    },
    methods: {
        ...mapMutations("typing", [ "setFont", "setReady" ]),
        start() {
            this.setFont(this.name);
            this.setReady(true);
        }
    }
}
</script>

<style lang="scss" scoped>
.font-item {
    padding: 45px 25px;
    box-shadow: 0 2px 8px rgba(27, 57, 85, .08);
    border-radius: 14px;
    border: 1px solid $appColor2;

    &--name {
        margin-bottom: 20px;
        font-size: $appFontSize3;
    }

    &--text {
        margin-bottom: 20px;
        font-size: $appFontSize4;
    }
}
</style>