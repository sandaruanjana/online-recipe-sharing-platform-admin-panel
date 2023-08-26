import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '../components/layouts/MainLayout.vue'
import CustomerView from '../views/recipe/UnapprovedRecipeView.vue'
import LoginView from "@/views/LoginView.vue";

// Define a guard function for authentication
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return true;
    }

  return false; // Replace with your actual authentication logic
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            meta: {title: 'Login'},
            component: LoginView
        },
      {
        path: '/',
        component: MainLayout,
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next();
          } else {
            // Redirect to a login page or show an unauthorized message
            next('/login');
          }
        },
        children: [
          {
            path: '',
            meta: { title: 'Un Approved Recipes' },
            component: CustomerView
          },
        ]
      }
    ]
})

export default router
