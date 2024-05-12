// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   css: ["~/assets/css/styles.css"],
// });
export default {
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/styles.css"],
};
// nuxt.config.js
// nuxt.config.js
// export default {
//   modules: [
//     '@nuxtjs/auth',
//   ],
//   auth: {
//     strategies: {
//       local: {
//         endpoints: {
//           login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
//           logout: { url: '/api/auth/logout', method: 'post' },
//           user: { url: '/api/auth/user', method: 'get', propertyName: 'user' },
//           register: { url: '/api/auth/register', method: 'post', propertyName: 'user' }
//         },
//         // Other strategy options...
//       }
//     }
//   }
// }
