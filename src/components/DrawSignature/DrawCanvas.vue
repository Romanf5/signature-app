<template>
    <div ref="area" class="draw-canvas">
        <canvas
            @mousedown="startDraw"
            @mouseup="stopDraw"
            @mouseout="stopDraw"
            @mousemove="draw"
            ref="canvas"
            class="draw-canvas--canvas"></canvas>
    </div>
</template>

<script>
import { mapState } from "vuex";
import downloadMixin from "@/components/downloadMixin";

export default {
    mixins: [ downloadMixin ],
    data() {
        return {
            isDrawing: false,
            cords: {
                prevX: 0,
                prevY: 0,
                x: 0,
                y: 0,
                list: []
            },
            ctx: null,

        }
    },
    computed: { ...mapState("draw", [ "color", "width", "angle" ]) },
    watch: {
        angle(angle) {
            this.rotate(angle);
        },
        color(color) {
            this.ctx.strokeStyle = color;
            this.redraw();
        },
        width(width) {
            this.ctx.lineWidth = width;
            this.redraw();
        }
    },
    methods: {
        init() {
            this.$refs.canvas.width = this.$refs.area.clientWidth;
            this.$refs.canvas.height = this.$refs.area.clientHeight;
            this.ctx = this.$refs.canvas.getContext("2d");
            this.ctx.lineJoin = "round";
            this.ctx.lineWidth = this.width;
            this.ctx.strokeStyle = this.color;
        },
        startDraw(e) {
            this.isDrawing = true;
            let { current: currentCords } = this.calculateCords(e);
            this.drawDot();
            let [ x, y ] = currentCords;
            this.cords.list.push({ x, y, start: true });
        },
        stopDraw() {
            this.isDrawing = false;
        },
        draw(e) {
            if(this.isDrawing) {
                let { prev: cordsPrev, current: cordsCurrent } = this.calculateCords(e);
                let [ x, y ] = cordsCurrent;
                this.cords.list.push({ x, y, start: false });
                this.ctx.beginPath();
                this.ctx.moveTo(...cordsPrev);
                this.ctx.lineTo(...cordsCurrent);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        },
        redraw() {
            this.clearCanvas();
            this.cords.list.forEach((cord, i) => {
                let prevCords = i && !cord.start ? this.cords.list[i - 1] : cord;
                this.ctx.beginPath();
                if(cord.start) this.drawDot(cord);
                this.ctx.moveTo(prevCords.x, prevCords.y);
                this.ctx.lineTo(cord.x, cord.y);
                this.ctx.closePath();
                this.ctx.stroke();
            });
        },
        drawDot(cords = null) {
            let { x, y } = cords || this.cords;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + 1, y + 1);
            this.ctx.closePath();
            this.ctx.stroke();
        },
        calculateCords(e) {
            const { offsetLeft, offsetTop } = this.$refs.canvas;
            [ this.cords.prevX, this.cords.prevY ] = [ this.cords.x, this.cords.y ];
            [ this.cords.x, this.cords.y ] = [ e.clientX - offsetLeft, e.clientY - offsetTop ];
            return {
                prev: [ this.cords.prevX, this.cords.prevY ],
                current: [ this.cords.x, this.cords.y ]
            };
        },
        clearCanvas(withStory = false) {
            if (withStory) this.cords.list = [];
            this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        },
        rotate(angle) {
            let { width: w, height: h } = this.$refs.canvas,
                translateX = w / 2,
                translateY = h / 2;
            this.clearCanvas();
            this.ctx.translate(translateX, translateY);
            this.ctx.rotate((angle * Math.PI) / 180);
            this.ctx.translate(-translateX, -translateY);
            this.redraw();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        },
        print() {
            this.makeLink(this.$refs.canvas);
            this.download();
        }
    },
    mounted() { this.init(); }
}
</script>

<style lang="scss" scoped>
.draw-canvas {
    min-height: 190px;

    &--canvas {
        border: 1px solid $appColor2;
        border-radius: 32px;
    }
}
</style>