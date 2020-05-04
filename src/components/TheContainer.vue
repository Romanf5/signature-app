<template>
    <div class="app-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.app-container {
    width: 100%;
    max-width: $containerWidth;
    padding: 0 $containerPadding;
    margin: 0 auto;
}
</style>