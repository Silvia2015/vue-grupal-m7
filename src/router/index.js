import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
     
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: { requiresAuth: true },
      component: () => import('../views/HomeView.vue')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },

    {
      path: '/admin',
      name: 'admin',
      meta: { requiresAuth: true },
      component: () => import('../views/admin/AdminLayout.vue'),
      children: [
        {
          path: 'admin-productos',
          name: 'admin-productos',
          meta: { requiresAuth: true },
          component: () => import('../views/admin/AdminView.vue')
        },
        {
          path: 'nuevo',
          name: 'nuevo-producto',
          meta: { requiresAuth: true },
          component: () => import('../views/admin/NewProductView.vue')
        },
        {
          path: 'editar/:id',
          name: 'editar-producto',
          meta: { requiresAuth: true },
          component: () => import('../views/admin/EditProductView.vue')
        },
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth, (user) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (!user && requiresAuth) {
      return next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }

    if (user && to.path === '/login') {
      return next('/home');
    }

    next();
  });
});
export default router


