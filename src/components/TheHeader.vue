<template>
    <header class="app-header">
        <app-container>
            <router-link :to="{ path: '/' }">Signature app</router-link>
        </app-container>
    </header>
</template>

<script>
import AppContainer from "./TheContainer";

export default { components: { "app-container": AppContainer } };
</script>

<style lang="scss" scoped>
.app-header {
    padding: 20px 0;
    border-bottom: 1px solid #cecece;
}
</style>