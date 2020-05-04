<template>
    <footer class="app-footer">
        <app-container>
            <router-link :to="{path: '/' }">Signature app</router-link>
        </app-container>
    </footer>
</template>

<script>
import AppContainer from "./TheContainer";

export default { components: { "app-container": AppContainer } };
</script>

<style lang="scss" scoped>
.app-footer {
    flex-shrink: 0;
    padding: 20px 0;
    border-top: 1px solid #cecece;
}
</style>