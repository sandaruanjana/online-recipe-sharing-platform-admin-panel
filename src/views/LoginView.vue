<template>
  <div class="container-fluid vh-100 d-flex justify-content-center align-items-center">
    <div class="card shadow-lg">
      <div class="card-body p-5">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="username" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" id="username" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";
import router from "@/router";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const email = ref('');
const password = ref('');

const login = () => {

  const data = {
    email: email.value,
    password: password.value
  };

  axios.post(`${__BASE_URL__}/auth/login`, data)
      .then((response) => {
        const access_token = response.data.data.access_token;
        localStorage.setItem('token', access_token);
        const role = response.data.data.role;
        localStorage.setItem('role', role);

        Toast.fire({
          icon: 'success',
          title: 'Login success!'
        })
        // actions.resetForm()
        router.push({ path: '/' })
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: 'Something went wrong!'
        })
      });
};
</script>

<style scoped>
.container-fluid {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.card {
  width: 350px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form-control {
  border: 1px solid #ced4da;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
