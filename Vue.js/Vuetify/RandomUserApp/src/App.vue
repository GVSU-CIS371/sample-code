<template>
  <header>Welcome to Random User APP</header>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Fade Transition */
.fade-leave-active {
  transition-property: all;
  transition-duration: 10ms;
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
