<template>
    <div ref="area" class="draw-canvas">
        <canvas
            @mousedown="startDraw"
            @mouseup="stopDraw"
            @mousemove="draw"
            ref="canvas"
            class="draw-canvas--canvas"></canvas>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDrawing: false,
            color: "#0B2034",
            width: 3,
            cords: {
                prevX: 0,
                prevY: 0,
                x: 0,
                y: 0
            }
        }
    },
    computed: {
        ctx() {
            return this.$refs.canvas.getContext("2d");
        }
    },
    methods: {
        startDraw(e) {
            this.isDrawing = true;
            this.calculateCords(e);
        },
        stopDraw() {
            this.isDrawing = false;
        },
        draw(e) {
            if(this.isDrawing) {
                let { prev: cordsPrev, current: cordsCurrent } = this.calculateCords(e);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.color;
                this.ctx.lineWidth = this.width;
                this.ctx.moveTo(...cordsPrev);
                this.ctx.lineTo(...cordsCurrent);
                this.ctx.stroke();
            }
        },
        calculateCords(e) {
            const { offsetLeft, offsetTop } = this.$refs.canvas;
            [ this.cords.prevX, this.cords.prevY ] = [ this.cords.x, this.cords.y ];
            [ this.cords.x, this.cords.y ] = [ e.clientX - offsetLeft, e.clientY - offsetTop ];
            return {
                prev: [ this.cords.prevX, this.cords.prevY ],
                current: [ this.cords.x, this.cords.y ]
            };
        }
    },
    mounted() {
        this.$refs.canvas.width = this.$refs.area.clientWidth;
        this.$refs.canvas.height = 190;
    }
}
</script>

<style lang="scss" scoped>
.draw-canvas {
    &--canvas {
        border: 1px solid $appColor2;
        border-radius: 32px;
    }
}
</style>