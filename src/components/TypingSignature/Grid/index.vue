<template>
<div class="typing-grid">
    <grid-settings
            @selectGrid="currentGrid = $event"
            class="typing-grid--settings"/>
    <div
        v-if="list"
        :class="classList.grid"
        class="typing-grid--grid">
        <font-item
            class="typing-grid--item"
            :class="classList.gridItem"
            :key="font.id"
            :name="font.name"
            v-for="font in list"/>
    </div>
</div>
</template>

<script>
import fonts from "./fonts";
import GridSettings from "./GridSettings";
import FontItem from "./Item";
import { mapState } from "vuex";

export default {
    components: {
        "grid-settings": GridSettings,
        "font-item": FontItem
    },
    data() {
        return {
            currentGrid: "grid",
        }
    },
    computed: {
        ...mapState("typing", { type: "fontType" }),
        classList() {
            return {
                grid: { "flex flex-wrap": this.currentGrid === "grid" },
                gridItem: {
                    "typing-grid--item__grid": this.currentGrid === "grid",
                    "typing-grid--item__list": this.currentGrid === "list"
                }
            }
        },
        list() {
            return this.type ? fonts[this.type] : null;
        }
    }
}
</script>

<style lang="scss" scoped>
.typing-grid {
    &--settings {
        margin-bottom: 25px;
    }

    &--item {
        width: 100%;
        margin-bottom: 36px;
        transition: max-width .3s ease-in-out;
        max-width: 100%;

        &__grid {
            max-width: calc((100% / 3) - 24px);
            margin: {
                left: 18px;
                right: 18px;
            }

            &:nth-child(3n + 1) {
                margin-left: 0;
            }

            &:nth-child(3n + 3) {
                margin-right: 0;
            }
        }
    }
}
</style>