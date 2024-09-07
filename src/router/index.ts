import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: []
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;