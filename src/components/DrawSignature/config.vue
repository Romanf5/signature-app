<template>
    <div class="draw-configs flex justify-center">
        <div class="draw-configs--config">
            <div class="draw-configs--config-title">
                <span>Color</span>
            </div>
            <div class="draw-configs--config-body">
                <app-color-picker
                        disable-alpha
                        class="draw-configs--color-picker"
                        v-model="color"/>
            </div>
        </div>
        <div class="draw-configs--config">
            <div class="draw-configs--config-title">
                <span>Width</span>
            </div>
            <div class="draw-configs--config-body draw-configs--config-body__picker">
                <range-picker
                        min="1"
                        max="10"
                        step="1"
                        v-model="width"
                        class="range-picker" />
            </div>
        </div>
        <div class="draw-configs--config">
            <div class="draw-configs--config-title">
                <span>Angle</span>
            </div>
            <div class="draw-configs--config-body draw-configs--config-body__picker">
                <range-picker
                        min="0"
                        max="360"
                        step="5"
                        v-model="angle"
                        class="range-picker"/>
            </div>
        </div>
    </div>
</template>

<script>
import AppColorPicker from "@/components/global/AppColorPicker";
import RangeSlider from "vue-range-slider";
import { mapState, mapMutations } from "vuex";
import "vue-range-slider/dist/vue-range-slider.scss";

export default {
    components: {
        "app-color-picker": AppColorPicker,
        "range-picker": RangeSlider
    },
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
    @include max-w(690px) {
        flex-wrap: wrap;
    }

    &--config {
        &:not(:last-child) {
            margin-right: 35px;
        }

        @include max-w(690px) {
            &:first-child {
                order: 2;
                margin-top: 20px;
                margin-right: 0;
            }
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

            &__picker {
                margin-top: 25px;
            }
        }
    }

    &--color-picker {
        width: 170px;
    }
}

.range-picker {
    /deep/ .range-slider-fill {
        background-color: transparent;
    }

    /deep/ .range-slider-rail {
        height: 6px;
        border-radius: 80px;
        background-color: $appColor4;
    }

    /deep/ .range-slider-knob {
        background-color: $appColor8;
        box-shadow: none;
        width: 18px;
        height: 18px;
    }
}
</style>