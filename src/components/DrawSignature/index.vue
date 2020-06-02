<template>
    <div class="draw">
        <signature-title class="draw--title">Draw your eSiganture here</signature-title>
        <draw-canvas ref="canvas" class="draw--canvas"/>
        <draw-config class="draw--config"/>
        <div class="draw--controls flex justify-center">
            <div class="draw--controls-control">
                <download-button @click="$refs.canvas.clearCanvas(true)">Clear and draw again</download-button>
            </div>
            <div class="draw--controls-control">
                <download-button @click="$refs.canvas.print()" reverse/>
            </div>
        </div>
    </div>
</template>

<script>
import SignatureTitle from "@/components/global/SignatureTitle";
import DrawCanvas from "./DrawCanvas";
import DrawConfig from "./config";
import DownloadButton from "@/components/global/DownloadButton"

export default {
    components: {
        "signature-title": SignatureTitle,
        "draw-canvas": DrawCanvas,
        "draw-config": DrawConfig,
        "download-button": DownloadButton
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

    &--config {
        padding-bottom: 40px;
        border-bottom: 1px solid $appColor4;
    }

    &--controls {
        margin-top: 30px;

        @include max-w(690px) {
            flex-direction: column;
            margin-bottom: 20px;
        }

        &-control {
            min-width: 305px;

            &:not(:last-child) {
                margin-right: 25px;

                @include max-w(690px) {
                    margin: {
                        right: 0;
                        bottom: 20px;
                    };
                }
            }
        }
    }
}
</style>