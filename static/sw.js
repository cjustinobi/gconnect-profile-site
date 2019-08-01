importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e6da141bdee2ab0bce9.js",
    "revision": "360cc0dbba38d294a2e1cb11bb4f0af3"
  },
  {
    "url": "/_nuxt/6a7189a2936fdf1fc607.js",
    "revision": "7894d14e79f36d09ce5e68c7f541871a"
  },
  {
    "url": "/_nuxt/6fc8b30511d71bdba180.js",
    "revision": "2b662291907f7e43bd38460a300a3744"
  },
  {
    "url": "/_nuxt/842b47195ec56a282345.js",
    "revision": "9b9ba01a2cd08b702398dd05a2621d36"
  },
  {
    "url": "/_nuxt/8af6c6a1621b9e4d434a.js",
    "revision": "4a99bee4d39f45e77619749e14e35c66"
  },
  {
    "url": "/_nuxt/bf23bba5e10b596c3051.js",
    "revision": "80d2c7d338c70ee5abdb5d7a2e91e4d6"
  },
  {
    "url": "/_nuxt/c500a27a1988ed8e20b6.js",
    "revision": "a73fe352feb15e7bdb046045f6ead199"
  },
  {
    "url": "/_nuxt/c695603a7633a48a4d2d.js",
    "revision": "ce104cf7ae3e07303690069c92cc9678"
  },
  {
    "url": "/_nuxt/fbe4483db7f94d6c8fe0.js",
    "revision": "9e92e5e039c3d73c9c957eab4f12d0d4"
  }
], {
  "cacheId": "agatevure-glory",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
