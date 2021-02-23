/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "06242228c4ab4cefd496aaa2aeb251ab"
  },
  {
    "url": "api/index.html",
    "revision": "d7530ffb268b7c711503d1fb85940d89"
  },
  {
    "url": "api/status.html",
    "revision": "309e88fa01aa152a055aaee57c788cdd"
  },
  {
    "url": "api/utils.html",
    "revision": "7ee3dc3d4a899a770c9567508960012f"
  },
  {
    "url": "assets/css/0.styles.687acee7.css",
    "revision": "582f5da38313a0b9301fa9ee7b109e37"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d3a1fab5.js",
    "revision": "4812098a4215ee1608e2f58dcbb40505"
  },
  {
    "url": "assets/js/11.0b7a9fd1.js",
    "revision": "02799ab1201d53c643d9845be6ec015c"
  },
  {
    "url": "assets/js/12.1840dc0a.js",
    "revision": "4e3596a6943092cb48cba6c1a82fcfb0"
  },
  {
    "url": "assets/js/13.712c39d0.js",
    "revision": "61bb3866c87b3709e1d45be6e4d12357"
  },
  {
    "url": "assets/js/14.95544350.js",
    "revision": "14597347374768b9161c2dd83f389876"
  },
  {
    "url": "assets/js/15.6ce8214a.js",
    "revision": "58911b11114fd57db34568c5d51fb343"
  },
  {
    "url": "assets/js/16.13239339.js",
    "revision": "2bfe86f4d9cb3dde7fd3e6d852ca5831"
  },
  {
    "url": "assets/js/17.57ca02b6.js",
    "revision": "e9557c8c04856ebbe27b8e19043ee6f9"
  },
  {
    "url": "assets/js/18.46708237.js",
    "revision": "070265a732c5a26f0063b18737f38d45"
  },
  {
    "url": "assets/js/19.507df81e.js",
    "revision": "59f0bf8f68f7baee3815e439c2e763ef"
  },
  {
    "url": "assets/js/2.6cc8bf5f.js",
    "revision": "5efbb217c27cfcdf23e6072c603487a2"
  },
  {
    "url": "assets/js/20.5069d77f.js",
    "revision": "706659e52dec955173cf972caba7cc8d"
  },
  {
    "url": "assets/js/21.40018c3a.js",
    "revision": "a707be2cfa1b94ebca419d7acf052569"
  },
  {
    "url": "assets/js/22.ac3eb90e.js",
    "revision": "3c9a2a8165ab0fe77f0f90a33b873653"
  },
  {
    "url": "assets/js/23.17d9d8b1.js",
    "revision": "0d6edd273941e285a13147b4f62a9525"
  },
  {
    "url": "assets/js/24.b8e2af90.js",
    "revision": "f67e114df16733dcd7a6c6ba25a57702"
  },
  {
    "url": "assets/js/25.fb1b9696.js",
    "revision": "1460a043a0305f4f0ccae2f2f528ced4"
  },
  {
    "url": "assets/js/3.42610edc.js",
    "revision": "99b413af7365f8468c2e9cc1f18e19dd"
  },
  {
    "url": "assets/js/4.7611c16d.js",
    "revision": "fe981e4abb6212660879cfd52887a460"
  },
  {
    "url": "assets/js/5.a4aeb15b.js",
    "revision": "1a2ff78c62c33b99a3765e3863d57e3d"
  },
  {
    "url": "assets/js/6.98d4e3b0.js",
    "revision": "c16907b701dd0750b017456f6e8498c8"
  },
  {
    "url": "assets/js/7.5e66a90e.js",
    "revision": "a0fdf70d7353e5d1f1d3e09467c30d83"
  },
  {
    "url": "assets/js/8.c4f6f6de.js",
    "revision": "28f9a26662f6465720eb46711f078a42"
  },
  {
    "url": "assets/js/9.fce4c4d2.js",
    "revision": "6ce5fb8208eadd624f7625503f6a6b55"
  },
  {
    "url": "assets/js/app.022c8811.js",
    "revision": "e0476bd04c26be584076a3c99e790d7c"
  },
  {
    "url": "guide/about.html",
    "revision": "28c6e45292ce33af4f0c6e18fba7190f"
  },
  {
    "url": "guide/cli.html",
    "revision": "bd66c1d348128060c7b9a3ebbf5ad3a6"
  },
  {
    "url": "guide/config.html",
    "revision": "a9eb06fbeea7fd838b30c732e98ea630"
  },
  {
    "url": "guide/database.html",
    "revision": "224bfa7c614d377d566d25cb57a58864"
  },
  {
    "url": "guide/extend.html",
    "revision": "b45803dc3fc18b59f1b2c35114adbccf"
  },
  {
    "url": "guide/faq.html",
    "revision": "45499027d54ad4c5a656c834d5f88ca2"
  },
  {
    "url": "guide/index.html",
    "revision": "bbbb2aaed430ed38c7fe95c8d054c8fa"
  },
  {
    "url": "guide/logger.html",
    "revision": "74a15688dcf59656e6aa3bca84fb81e1"
  },
  {
    "url": "images/ebg/hierarchy.jpg",
    "revision": "641a61bdba6b63626ec16d50f998bcb5"
  },
  {
    "url": "index.html",
    "revision": "10d0edfbfe4caa4201b23a1d7ebccfd0"
  },
  {
    "url": "logo.png",
    "revision": "294846debf9345f907f493c9d4dcf897"
  },
  {
    "url": "logo.svg",
    "revision": "1c5d6e14a2dfa1c8d3be669c3b77949a"
  },
  {
    "url": "plugins/default.html",
    "revision": "51d87ac477f24c278a7976f46e534a5d"
  },
  {
    "url": "plugins/index.html",
    "revision": "8d082e22483ebc008007dac5140a4624"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
