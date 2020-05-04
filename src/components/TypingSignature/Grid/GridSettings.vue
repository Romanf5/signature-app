<template>
    <div class="grid-settings flex justify-end">
        <div @click="$emit('selectGrid', 'grid')" class="grid-settings--item gsi">
            <span class="gsi--name">Grid</span>
        </div>
        <div @click="$emit('selectGrid', 'list')" class="grid-settings--item gsi">
            <span class="gsi--name">List</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gsi {
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 30px;
    }
}
</style>