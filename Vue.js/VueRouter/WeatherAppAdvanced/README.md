# WeatherAppAdvanced: Vue Router Features for Follow-up Lessons

This project is a second classroom example that builds on the basic `WeatherApp`.

Use this app after students understand:

1. `createRouter` and route setup
2. `router-link`
3. `router-view`
4. Route params

## What this advanced project demonstrates

- Route transitions (using route `meta.transition` values)
- Named views (`default` + `sidebar`)
- Navigation guards:
  - Global guard in `src/main.ts` for a passcode-protected route
  - Route-level `beforeEnter` guard for the hourly route
  - Component-level `onBeforeRouteLeave` guard in settings

## Run locally

```bash
npm install
npm run dev
```

## Suggested classroom sequence

1. Open `src/main.ts` and explain route records, named views, and guards.
2. Open `src/App.vue` and show transitions plus the two router outlets.
3. Demo `/forecast -> /hourly` guard behavior (with and without `?unlocked=yes`).
4. Demo `/alerts` global guard behavior (with and without `?passcode=gvsu`).
5. Demo unsaved-change prompt from settings before route leave.
