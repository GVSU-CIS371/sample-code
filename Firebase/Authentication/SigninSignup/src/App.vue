<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="shrink-explode">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* Transition setup */
.shrink-explode-enter-active,
.shrink-explode-leave-active {
  transition: opacity 500ms, transform 500ms;
}

.shrink-explode-enter,
.shrink-explode-leave-to /* .shrink-explode-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
