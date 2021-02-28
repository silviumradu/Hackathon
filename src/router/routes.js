
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'home', component: () => import('pages/UserLogin.vue') },
      { path: 'register', name:'register', component: () => import('pages/UserRegister.vue') },
      { path: 'login',name:'login',component:() => import('pages/UserLogin.vue')},
      { path: 'test',name:'test',component:() => import('pages/testApi.vue')},
      { path: 'paymentgateway',name:'paymentgateway',component:() => import('pages/PaymentGateway.vue')},
      { path: 'listainstitutii',name:'listainstitutii',component:() => import('pages/ListaInstitutii.vue')},
      { path: 'cerereclient',name:'cerereclient',component:() => import('pages/CerereClient.vue')},
      { path: 'sucursale',name:'sucursale',component:() => import('pages/Sucursale.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
    //import Vue from 'vue';
  }
]

export default routes
