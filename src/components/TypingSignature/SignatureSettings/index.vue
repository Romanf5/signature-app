<template>
    <div class="signature-settings">
        <div class="flex">
            <div class="signature-settings--type">
                <app-selector
                     v-model="type"
                    :list="typeList"/>
            </div>
            <div class="signature-settings--color">
                <app-color-picker v-model="color"/>
            </div>
        </div>
    </div>
</template>

<script>
import AppSelector from "@/components/global/AppSelector";
import AppColorPicker from "@/components/global/AppColorPicker";

export default {
    components: {
        "app-selector": AppSelector,
        "app-color-picker": AppColorPicker
    },
    data() {
        return {
            typeList: [
                { text: "Handwriting", value: 1 },
                { text: "Sans Serif", value: 2 }
            ],
            type: false,
            color: "#fff"
        }
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

    &--type {
        max-width: 280px;
        margin-right: 20px;
        width: 100%;
    }

    &--color {
        width: 100%;
        max-width: 156px;
    }
}
</style>