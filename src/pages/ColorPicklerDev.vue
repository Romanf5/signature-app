<template>
    <div class="color-picker-dev">
        <color-picker v-model="color"/>
    </div>
</template>

<script>
import ColorPicker from "@/components/colorPicker";

export default {
    components: { "color-picker": ColorPicker },
    data() {
        return { color: "#000" };
    }
};
</script>