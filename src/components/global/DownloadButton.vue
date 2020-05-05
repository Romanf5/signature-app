<template>
    <button @click="$emit('click')" class="download-button">Download eSignature</button>
</template>

<style lang="scss" scoped>
.download-button {
    width: 100%;
    color: $appColor8;
    padding: 15px 10px;
    border: 1px solid $appColor8;
    background-color: $mainBgColor;
    border-radius: 50px;
    cursor: pointer;
}
</style>