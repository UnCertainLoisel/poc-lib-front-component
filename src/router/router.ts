import { Router } from 'vue-router';
import { Error404 } from '@/views';

/**
 * Ajoute une redirection automatique vers une route "/404" menant à "@views/Error404.vue"
 * @param router 
 */
export function add404Page(router: Router) {
  router.addRoute({
    path: '/404',
    name: '404',
    component: () => Error404,
  });
  router.addRoute({
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  });
}

