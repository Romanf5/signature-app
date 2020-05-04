<template>
    <div class="font-item">
        <span>{{ text }}</span>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.font-item {
    padding: 25px 45px;
    box-shadow: 0 2px 8px rgba(27, 57, 85, .08);
    border-radius: 14px;
    border: 1px solid $appColor2;
}
</style>