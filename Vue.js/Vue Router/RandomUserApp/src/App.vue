<template>
  <header>Welcome to Random User API</header>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <footer>Footer of the page</footer>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  /* Adjust as needed */
  flex: 0;
  background-color: lightblue; /* just to distinguish between sections */
  padding: 10px;
  text-align: center;
}

/* Assuming that the router-view takes the main content area */
router-view {
  overflow: auto; /* If content inside the router-view is more than viewport height, it will scroll */
}

footer {
  /* Adjust as needed */
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

/* Fade Transition */
.fade-leave-active {
  transition-property: all;
  transition-duration: 1000ms;
  transition-timing-function: ease;
}
.fade-leave {
  transform: translateY(50%);
}
.fade-leave-to {
  transform: translateY(100%);
  background: green;
}
</style>
