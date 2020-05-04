<template>
    <div class="app-wrapper" id="app">
        <div class="app-content">
            <app-header/>
            <router-view></router-view>
        </div>
        <app-footer/>
    </div>
</template>

<script>
import AppHeader from "./components/TheHeader";
import AppFooter from "./components/TheFooter";

export default {
    components: {
        "app-header": AppHeader,
        "app-footer": AppFooter
    }
};
</script>

<style lang="scss" scoped></style>
