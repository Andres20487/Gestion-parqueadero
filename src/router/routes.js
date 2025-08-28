const routes = [
  // Ruta de Login
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/UserLoginPage.vue'),
      },
    ],
  },

  // Rutas principales después de login
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'inicio',
        name: 'inicio',
        component: () => import('pages/InicioPage.vue'),
      },
      {
        path: 'parqueaderos',
        name: 'parqueaderos',
        component: () => import('pages/ParqueaderosPage.vue'),
      },
    ],
  },

  // Página de error
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
