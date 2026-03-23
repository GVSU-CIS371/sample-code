<template>
  <div class="app-shell">
    <header class="app-header">
      <router-link class="brand" to="/">
        Weather Router Demo
        <img src="./assets/vue.svg" alt="Vue logo" />
      </router-link>
      <nav class="top-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/forecast">Forecast</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
    </header>
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">Intro to Vue Router</footer>
  </div>
</template>

<style scoped>
.app-shell {
  background: #ffffff;
  border: 1px solid #d8e1eb;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  overflow: hidden;
}

.app-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  background: #0b63ce;
  color: #ffffff;
  padding: 1rem 1.25rem;
}

.brand {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
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
  gap: 0.75rem;
}

.top-nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 0.2rem 0.35rem;
  border-radius: 6px;
}

.top-nav a.router-link-active {
  background: rgba(255, 255, 255, 0.2);
}

.app-main {
  padding: 1.25rem;
}

.app-footer {
  border-top: 1px solid #d8e1eb;
  padding: 0.9rem 1.25rem;
  font-size: 0.9rem;
  color: #475569;
}
</style>
