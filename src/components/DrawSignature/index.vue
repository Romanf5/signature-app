<template>
    <div class="draw">
        <signature-title class="draw--title">Draw your eSiganture here</signature-title>
        <draw-canvas class="draw--canvas"/>
    </div>
</template>

<script>
import SignatureTitle from "@/components/global/SignatureTitle";
import DrawCanvas from "./DrawCanvas";

export default {
    components: {
        "signature-title": SignatureTitle,
        "draw-canvas": DrawCanvas
    }
};
</script>

<style lang="scss" scoped>
.draw {
    &--title {
        margin-bottom: 30px;
    }

    &--canvas {
        max-width: 865px;
        margin: 0 auto;
    }
}
</style>