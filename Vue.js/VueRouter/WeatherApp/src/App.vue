<template>
  <div>
    <header>
      <router-link to="/"
        >Welcome to MyApp<img src="./assets/vue.svg" alt="MyApp"
      /></router-link>
    </header>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <div>Fotter of the Page</div>
  </div>
</template>

<style scoped>
/* Fade Transition */
.fade-leave-active {
  transition-property: all;
  transition-duration: 1000ms;
  transition-timing-function: ease;
}
.fade-leave {
  transform: translateX(0%);
}
.fade-leave-to {
  transform: translateX(100%);
  background: green;
}

.fade-enter-active {
  transition-property: all;
  transition-duration: 1000ms;
  transition-timing-function: ease;
}
.fade-enter {
  transform: translateY(0%);
}
.fade-enter-to {
  transform: translateY(100%);
  background: rgb(238, 95, 12);
}
</style>
