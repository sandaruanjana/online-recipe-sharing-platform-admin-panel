<template>
  <div class="wrapper">
    <navbar/>
    <sidebar/>
    <router-view></router-view>
    <footerbar/>
  </div>
</template>

<script setup>
  import Navbar from './inc/Navbar.vue';
  import Sidebar from './inc/Sidebar.vue';
  import Footerbar from './inc/Footer.vue';
</script>