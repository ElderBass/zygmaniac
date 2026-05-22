import { createRouter, createWebHistory } from "vue-router";

import ContactPage from "@/pages/ContactPage.vue";
import HomePage from "@/pages/HomePage.vue";
import WritingPage from "@/pages/WritingPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/writing",
            name: "writing",
            component: WritingPage,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactPage,
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
