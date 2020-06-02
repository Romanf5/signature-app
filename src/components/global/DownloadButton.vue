<template>
    <button @click="$emit('click')"
            :class="classList"
            class="download-button">
        <slot>
            Download eSignature
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        reverse: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classList() {
            return {
                "download-button__reverse": this.reverse
            };
        }
    }
}
</script>

<style lang="scss" scoped>
.download-button {
    width: 100%;
    color: $appColor8;
    padding: 15px 10px;
    border: 1px solid $appColor8;
    background-color: $mainBgColor;
    border-radius: 50px;
    cursor: pointer;

    &__reverse {
        color: $mainBgColor;
        background-color: $appColor8;
    }
}
</style>