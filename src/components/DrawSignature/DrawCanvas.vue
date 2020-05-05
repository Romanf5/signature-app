<template>
    <div class="draw-canvas">
        <canvas
            @mousedown="mousePressed = true"
            @mouseup="mousePressed = false"
            ref="canvas"
            class="draw-canvas--canvas"></canvas>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mousePressed: false,
            color: "#0B2034",
            width: 3
        }
    },
    computed: {
        canvas() {
            return this.$refs.canvas.getContext("2d");
        }
    },
    methods: {
        draw(x, y) {
            this.canvas.beginPath();
            this.canvas.strokeStyle = this.color
        }
    }
}
</script>

<style lang="scss" scoped>
.draw-canvas {
    &--canvas {
        border: 1px solid $appColor2;
        border-radius: 32px;
        width: 100%;
        height: 190px;
    }
}
</style>