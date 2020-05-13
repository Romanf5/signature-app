<template>
    <div class="draw">
        <signature-title class="draw--title">Draw your eSiganture here</signature-title>
        <draw-canvas class="draw--canvas"/>
        <draw-config class="draw--config"/>
    </div>
</template>

<script>
import SignatureTitle from "@/components/global/SignatureTitle";
import DrawCanvas from "./DrawCanvas";
import DrawConfig from "./config";

export default {
    components: {
        "signature-title": SignatureTitle,
        "draw-canvas": DrawCanvas,
        "draw-config": DrawConfig
    }
};
</script>

<style lang="scss" scoped>
.draw {
    max-width: 865px;
    margin: 0 auto;

    &--title {
        margin-bottom: 30px;
    }

    &--canvas {
        margin-bottom: 25px;
    }
}
</style>