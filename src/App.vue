<template>
    <div class="app-wrapper" id="app">
        <div class="app-content">
            <app-header/>
            <app-container>
                <router-view></router-view>
            </app-container>
        </div>
        <app-footer/>
    </div>
</template>

<script>
import AppHeader from "./components/TheHeader";
import AppFooter from "./components/TheFooter";
import AppContainer from "./components/TheContainer";

export default {
    components: {
        "app-header": AppHeader,
        "app-footer": AppFooter,
        "app-container": AppContainer
    }
};
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>

<style lang="scss" scoped>
.app-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.app-content {
    flex: 1 0 auto;
}
</style>
