import Vue from "vue";
import VueRouter from "vue-router";
import TypingPage from "./pages/TypingSignature";
import DrawPage from  "./pages/DrawSignature";
import MainPage from "./pages/MainPage";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: "/", component: MainPage },
        { path: "/typing", component: TypingPage },
        { path: "/draw", component: DrawPage }
    ]
});
