<template>
    <div class="draw-configs flex justify-center">
        <div class="draw-configs--config">
            <div class="draw-configs--config-title">
                <span>Color</span>
            </div>
            <div class="draw-configs--config-body">
                <app-color-picker v-model="color"/>
            </div>
        </div>
        <div class="draw-configs--config">
            <div class="draw-configs--config-title">
                <span>Width</span>
            </div>
            <div class="draw-configs--config-body">
                <input min="1" max="10" step="1" v-model="width" type="range">
            </div>
        </div>
        <div class="draw-configs--config">
            <div class="draw-configs--config-title">
                <span>Angle</span>
            </div>
            <div class="draw-configs--config-body">
                <input min="0" max="360" step="5" v-model="angle" type="range">
            </div>
        </div>
    </div>
</template>

<script>
import AppColorPicker from "@/components/global/AppColorPicker";
import { mapState, mapMutations } from "vuex";

export default {
    components: { "app-color-picker": AppColorPicker },
    computed: {
        ...mapState("draw", {
            currentColor: "color",
            currentWidth: "width",
            currentAngle: "angle"
        }),
        color: {
            get() { return this.currentColor },
            set(color) { this.setColor(color); }
        },
        width: {
            get() { return this.currentWidth },
            set(width) { this.setWidth(width); }
        },
        angle: {
            get() { return this.currentAngle },
            set(angle) { this.setAngle(angle); }
        }
    },
    methods: { ...mapMutations("draw", [ "setWidth", "setColor", "setAngle" ]) }
}
</script>

<style lang="scss" scoped>
.draw-configs {
    &--config {
        &:not(:last-child) {
            margin-right: 35px;
        }

        &-title {
            text-align: center;
            font-size: $appFontSize2;
            font-family: $mainFontBold;
        }

        &-body {
            display: flex;
            align-items: center;
            margin-top: 10px;
        }
    }
}
</style>