<template>
    <div class="signature-settings">
        <div class="signature-settings--type">
            <app-selector
                 v-model="type"
                :list="typeList"/>
        </div>
    </div>
</template>

<script>
import AppSelector from "@/components/global/AppSelector";

export default {
    components: { "app-selector": AppSelector },
    data() {
        return {
            typeList: [
                { text: "Handwriting", value: 1 },
                { text: "Sans Serif", value: 2 }
            ],
            type: false
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
    }
}
</style>