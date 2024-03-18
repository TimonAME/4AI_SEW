import { createRouter, createWebHistory } from 'vue-router'
import Gallerie from "@/components/Gallerie.vue";
import Photo from "@/components/Photo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/components/Gallerie',
        name: 'Gallerie',
        component: Gallerie
    },
    {
        path: '/components/Photo',
        name: 'Photo',
        component: Photo
    }

  ]
})

export default router
