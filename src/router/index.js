import {createRouter, createWebHashHistory} from "vue-router";
import StarmapView from "../views/StarmapView.vue";
import HomeView from "../views/HomeView.vue";
import {publicPath} from '@/../vue.config'

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/starmap",
        name: "Starmap",
        component: StarmapView
    }
];

const router = createRouter({
    history: createWebHashHistory(publicPath),
    routes
});

export default router;
