<template>
    <div class="signature-title">
        <h1>
            <slot></slot>
        </h1>
    </div>
</template>

<style lang="scss" scoped>
.signature-title {
    text-align: center;
    color: $appColor1;
    font-size: $titleFontSize;

    h1 { font-size: 1em; }
}
</style>