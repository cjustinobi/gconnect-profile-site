importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1af3c9605e1754b8cc92.js",
    "revision": "4e1b3da635c21e539486774f0ec1d672"
  },
  {
    "url": "/_nuxt/1fdd11b4fe5fd733ce1d.js",
    "revision": "ea268ae68f70909b84b567932dd7b4dd"
  },
  {
    "url": "/_nuxt/3a4e2cd622cecc1711d5.js",
    "revision": "5894544c4caf2271584489afca8b4878"
  },
  {
    "url": "/_nuxt/5077d1d98b800d7cf46b.js",
    "revision": "e1ecfe38bb00a1b1117c66fee423ce2b"
  },
  {
    "url": "/_nuxt/5efabae6162d18536dab.js",
    "revision": "72f61bacbb9fa490e852174fe23ef29f"
  },
  {
    "url": "/_nuxt/7f366a7bf01f30c284a3.js",
    "revision": "7948776f8b965d50409169a2d5da5b3e"
  },
  {
    "url": "/_nuxt/dbb9956ed0bed74348fe.js",
    "revision": "e8fec106a73c1853f3885ec3c6381969"
  },
  {
    "url": "/_nuxt/eef2202fd96d9ceb2426.js",
    "revision": "18f0a7b198e6bb36f5ee66d69cb8d44d"
  }
], {
  "cacheId": "Agatevure-Glory",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





