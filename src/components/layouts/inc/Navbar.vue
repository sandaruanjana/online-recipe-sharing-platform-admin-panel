<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown user user-menu">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                    <img src="/src/assets/dist/img/1.jpg" class="user-image img-circle elevation-2" alt="User Image">
                    <span class="hidden-xs">Admin</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <!-- User image -->
                    <li class="user-header bg-primary">
                        <img src="/src/assets/dist/img/1.jpg" class="img-circle elevation-2" alt="User Image">

                        <p>
                            Admin
                            <small></small>
                        </p>
                    </li>

                    <!-- Menu Footer-->
                    <li class="user-footer">
                        <a type="button" @click="signOut" style="width: 100%;" class="btn btn-default btn-flat">Sign out</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->
</template>

<script setup>

import router from "@/router";

const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  router.push({ path: '/login' });
}



</script>
