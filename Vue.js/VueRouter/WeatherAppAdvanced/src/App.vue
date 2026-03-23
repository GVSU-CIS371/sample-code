<template>
  <div class="app-shell">
    <header class="app-header">
      <router-link class="brand" to="/">
        Weather Router Advanced
        <img src="./assets/vue.svg" alt="Vue logo" />
      </router-link>
      <nav class="top-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/forecast">Forecast</router-link>
        <router-link to="/settings">Settings</router-link>
        <router-link to="/alerts">Alerts (Guarded)</router-link>
      </nav>
    </header>

    <main class="content-grid">
      <section class="main-panel">
        <router-view v-slot="{ Component, route }">
          <transition
            :name="transitionName(route.meta.transition)"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </section>

      <aside class="sidebar-panel">
        <router-view name="sidebar" />
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
function transitionName(value: unknown): string {
  return typeof value === "string" ? value : "fade";
}
</script>

<style scoped>
.app-shell {
  min-height: 100dvh;
}

.app-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: #0d47a1;
  color: #ffffff;
  padding: 1rem 1.25rem;
  border-radius: 12px 12px 0 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: inherit;
  text-decoration: none;
  font-weight: 700;
}

.brand img {
  width: 24px;
  height: 24px;
}

.top-nav {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.top-nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
}

.top-nav a.router-link-active {
  background: rgba(255, 255, 255, 0.18);
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #d7e2f2;
  border-top: 0;
  border-radius: 0 0 12px 12px;
  background: #ffffff;
}

.main-panel {
  min-height: 340px;
  padding: 1rem;
  background: #f8fbff;
  border: 1px solid #d7e2f2;
  border-radius: 10px;
}

.sidebar-panel {
  padding: 1rem;
  background: #f3f7ff;
  border: 1px solid #d7e2f2;
  border-radius: 10px;
}

/* Route transitions for classroom demos */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(16px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
