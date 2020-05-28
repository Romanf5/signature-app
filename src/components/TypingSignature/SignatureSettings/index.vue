<template>
    <div class="signature-settings flex justify-between items-center">
        <div style="width: 100%" class="flex">
            <div class="signature-settings--type">
                <app-selector
                     placeholder="Select type"
                     v-model="type"
                    :list="typeList"/>
            </div>
            <div class="signature-settings--color">
                <app-color-picker v-model="color"/>
            </div>
        </div>
        <button @click="refresh" class="signature-settings--refresh">
            <span class="signature-settings--refresh-text">Clear</span>
            <svg class="signature-settings--refresh-icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4252 0.00738869C9.42392 0.0871917 7.49194 0.762053 5.87625 1.94568C4.26057 3.12931 3.03461 4.76792 2.35514 6.65199C2.33703 6.70246 2.30205 6.74511 2.2561 6.77275C2.21016 6.80038 2.15608 6.81129 2.10301 6.80364L0.531642 6.56733C0.445526 6.55629 0.358029 6.5689 0.278537 6.60381C0.199045 6.63872 0.130556 6.69461 0.0804189 6.7655C0.0312416 6.83758 0.00333134 6.92204 -0.000123469 7.00924C-0.00357828 7.09643 0.0175617 7.18284 0.0608814 7.25858L2.55331 11.6313C2.58871 11.6932 2.63789 11.7461 2.69704 11.786C2.75618 11.8259 2.82371 11.8517 2.89439 11.8613C2.96508 11.8709 3.03704 11.8642 3.10469 11.8415C3.17235 11.8189 3.23389 11.781 3.28457 11.7308L6.79201 8.24569C6.85342 8.18489 6.89669 8.10818 6.91695 8.02417C6.93721 7.94015 6.93366 7.85215 6.90671 7.77004C6.87976 7.68793 6.83046 7.61495 6.76436 7.55928C6.69825 7.50362 6.61794 7.46747 6.53244 7.45489L4.93688 7.21672C4.90125 7.21154 4.86731 7.19816 4.83773 7.17763C4.80815 7.1571 4.78374 7.12998 4.76643 7.09841C4.74911 7.06685 4.73936 7.03169 4.73794 6.99572C4.73652 6.95974 4.74347 6.92393 4.75825 6.89109C5.31241 5.63643 6.19232 4.55297 7.30661 3.7532C8.4209 2.95343 9.72896 2.4665 11.095 2.34298C12.461 2.21945 13.8352 2.46383 15.0749 3.05073C16.3146 3.63764 17.3746 4.54568 18.1448 5.68058C18.9151 6.81549 19.3675 8.13588 19.4551 9.50467C19.5427 10.8735 19.2624 12.2408 18.6431 13.4646C18.0239 14.6885 17.0883 15.7243 15.9336 16.4645C14.7789 17.2046 13.4471 17.6223 12.0764 17.6739C11.768 17.6795 11.4744 17.8073 11.2602 18.0293C11.0461 18.2514 10.9289 18.5494 10.9344 18.8578C10.94 19.1662 11.0678 19.4598 11.2898 19.674C11.5119 19.8882 11.8099 20.0054 12.1183 19.9998H12.162C13.4801 19.9594 14.7772 19.6587 15.9786 19.115C17.1801 18.5714 18.2621 17.7956 19.1626 16.8322C20.063 15.8688 20.7641 14.7368 21.2254 13.5014C21.6868 12.266 21.8993 10.9516 21.8507 9.63383C21.8021 8.31602 21.4934 7.02082 20.9424 5.82276C20.3914 4.6247 19.6089 3.54743 18.6399 2.65293C17.671 1.75843 16.5347 1.06435 15.2966 0.610645C14.0584 0.156938 12.7427 -0.0474475 11.4252 0.00924938V0.00738869Z" fill="#BAC9DB"/>
            </svg>
        </button>
    </div>
</template>

<script>
import AppSelector from "@/components/global/AppSelector";
import AppColorPicker from "@/components/global/AppColorPicker";
import { mapState, mapMutations } from "vuex";

export default {
    components: {
        "app-selector": AppSelector,
        "app-color-picker": AppColorPicker
    },
    data() {
        return {
            typeList: [
                { text: "Handwriting", value: "hands" },
                { text: "Sans Serif", value: "serif" }
            ]
        }
    },
    computed: {
        ...mapState("typing", [ "currentColor", "fontType" ]),
        color: {
            get() { return this.currentColor },
            set(color) { this.setColor(color); }
        },
        type: {
            get() { return this.typeList.find(item => item.value === this.fontType) || null; },
            set(type) { this.setType(type.value); }
        }
    },
    methods: {
        ...mapMutations("typing", [ "setColor", "setType", "refresh" ])
    }
};
</script>

<style lang="scss" scoped>
$settings-border: 1px solid $appColor4;

.signature-settings {
    padding: 30px 0;
    border: {
        bottom: $settings-border;
        top: $settings-border;
    }

    @include max-w(560px) {
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    &--type {
        max-width: 280px;
        margin-right: 20px;
        width: 100%;
    }

    &--color {
        width: 100%;
        max-width: 180px;
    }

    &--refresh {
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: transform .3s ease-in-out;

        @include max-w(560px) {
            order: -1;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
        }

        &-text {
            color: $appColor2;
            font-size: $appFontSize2;
            margin-right: 10px;

            @include min-w(560px) {
                display: none;
            }
        }

        &:hover {
            @include min-w(960px) {
                transform: rotate(-360deg);
            }
        }
    }
}
</style>