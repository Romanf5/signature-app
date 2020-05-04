<template>
    <div v-click-outside="hide" class="color-picker">
        <div @click="isOpen = !isOpen" class="color-picker--selector flex items-center">
            <div
                :style="{ backgroundColor: value }"
                class="color-picker--color"></div>
            <div class="color-picker--color-text">
                <span>{{value}}</span>
            </div>
        </div>
        <div
            :class="classList.palette"
            class="color-picker--palette">
            <color-picker v-model="color"/>
        </div>
    </div>
</template>

<script>
import { Chrome } from "vue-color";
import ClickOutside from 'vue-click-outside';

export default {
    props: {
        value: {
            type: String,
            default: "#fff"
        }
    },
    components: { "color-picker": Chrome },
    data() {
        return { isOpen: false };
    },
    computed: {
        color: {
            get() { return this.value },
            set(color) {
                this.$emit("input", color.hex8);
            }
        },
        classList() {
            return {
                palette: { "color-picker--palette__open": this.isOpen }
            }
        }
    },
    methods: { hide() { this.isOpen = false; } },
    directives: { ClickOutside }
};
</script>

<style lang="scss" scoped>
.color-picker {
    position: relative;
    width: 100%;

    &--palette {
        position: absolute;
        display: none;
        top: calc(100% + 5px);

        &__open {
            display: block;
        }
    }

    &--selector {
        border: 1px solid $appColor5;
        border-radius: 180px;
        padding: 5px 7px;
        cursor: pointer;
    }

    &--color {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(11, 32, 52, .04);

        &-text {
            margin-left: 10px;
            font-size: $appFontSize2;
        }
    }
}
</style>