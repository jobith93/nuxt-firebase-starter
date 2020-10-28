export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: process.env.color },
  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "@/assets/scss/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/plugins/element-ui", 
    "@/plugins/auth"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/bulma",
    "@nuxtjs/style-resources",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: process.env.fb_apiKey,
          authDomain: process.env.fb_authDomain,
          databaseURL: process.env.fb_databaseURL,
          projectId: process.env.fb_projectId,
          storageBucket: process.env.fb_storageBucket,
          messagingSenderId: process.env.fb_messagingSenderId,
          appId: process.env.fb_appId,
          measurementId: process.env.fb_measurementId
        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
          analytics: true,
        }
      }
    ]
  ],
  styleResources: {
    scss: ['@/assets/scss/main.scss']
  },
  pwa: {
    manifest: {
      name: process.env.title,
    },
    meta: {
      /* meta options */
      theme_color: process.env.color,
      name: process.env.title
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/]
  }
};
