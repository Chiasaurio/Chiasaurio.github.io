'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4fe5b286d9efd09d0bd607ad4d94c246",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f5e55f60f155e79359a1ca75a149ec00",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0e01014c8b2dbc113701d8248cdaf8e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d5cab2cc0a5faed219206df0c46a42aa",
".git/logs/refs/heads/master": "d5cab2cc0a5faed219206df0c46a42aa",
".git/logs/refs/remotes/origin/HEAD": "0c50399a37ae14571fb85b3d0e55c030",
".git/logs/refs/remotes/origin/master": "7b8e3b0c0c6a75eae9edda650e4190c3",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/2eca24780a9ede25794cd13f2f2894f47e1e58": "099533917cb659d6101ec16b915440a8",
".git/objects/10/01454125081f8f32cda0997b6e6e89152dbe15": "d06638a7bfc095491fba2aa096b180ef",
".git/objects/15/3aaeb1f335324ac2b2f4fcf185ffb7c0f07044": "c8f476328e275361f4b12f7e5453fa76",
".git/objects/18/75ca8f6da8217eb997a492547848bed852700c": "a0821f7438167abeb49373f2ac11a462",
".git/objects/1a/072330a807ba9f247b6b51e234d8ac7c7c9ef8": "8936d95ee2ff16f68a5b241773feb651",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/32/992bb67cc8ce96e84b303842622f224a572765": "ab32bf810fa76b7578f3ea55a2d95adf",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/9d71902024c84076ceaf09c955f39014b3ae44": "f7cf8e59108bba0c2fd6bd78b2aaeb31",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/83bd7e75011c243a1db9f28e1af48e07a0e877": "12020c4d89c62486706a60732e814889",
".git/objects/3c/911e135b393d7db57d9a7c530cd847c6d7756a": "82d8d699de4b85f12e8b34091365a18f",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/65838426b02dfc8223f0238887d933288bbce2": "a4f80481d03278ca05286774bd3dbcd6",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/6143a3aa2763d3bffd75c81a2fda43de8b4452": "daadedd1a16a07d9b18c543a3716937a",
".git/objects/49/4292489391cfc86082318f8517b12701450875": "2003590b25cc0b5d0aa62bc586de82dc",
".git/objects/4d/545bd7ab8def466c6fd1b546d19ca87e2effe7": "559d984d2b2b56131171d1e0994f19bd",
".git/objects/56/8b41851449b19275c4b058da0d2caea789b92c": "24916d6c75fdc20a5c240ec2ed38a1f4",
".git/objects/5e/da9ec96e91ba8e4a418e53af4483766e245d6d": "339f0cfcef1c87a0ca364f5c6a9052ca",
".git/objects/6a/51fb040a2a0f727a5c1c313ae50a91610562cd": "46f4323f9bea93a4b293b1949cd54495",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/b3b705d018006a2bd4200ea94c9d5fb98b6f76": "3f0f65921839b32e52dee427e6222ebf",
".git/objects/71/52042ba9e2a6a829f54c510dda0789fa011ffe": "5a6ce4b28699a8469ce4618acc2346fd",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/15d96075d5acbf90b5dd7fe4e12b2968c863fa": "cf316b5d69b36ab0df915492699012f8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/c1c3d5b6f7b5452964b591fc4a0411ac2b5722": "28a456272ca9936adfc436942634b0ea",
".git/objects/9d/269545363ff3c93ba899765e728b193ea37c3c": "7685c2a5710bb9265bdd3866e82976ba",
".git/objects/9f/792d4043530311a5a491d94a66af7e5bc640c0": "abd0d2228a7911f3a0cf501be5b367fa",
".git/objects/a0/b82f018399c82b5a3a0665af3603775ea1e938": "f1df6c1b2ada8fb3fbb2f5be213f3441",
".git/objects/a5/a7469cbc1885fd92158a66f9171e5265339678": "3eb8550b3e0f23f25b1df8ad706c6842",
".git/objects/a7/400e8d92c881893db1be743f88c301872aff5a": "ffa4f3341bd2f1a5e17b1878b79ba06b",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/80f9dd92e6c7f3669dd8405ae7c6769e74aea3": "62ce793850c67e2b9a47604115e00b2a",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/b0a704d82e088f906529af46976a2dc5477a6c": "a21cc7e8f45bbce84142508433c348f2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/e9c209002016a67600b6772e386525c60417f5": "b08800b4b28dbd8e486e78cad82f158f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/b291dde05d808c7403317bed6da8487d32d547": "f9a14d33b2ffb4b6a296c55a07995c9f",
".git/objects/bc/e77882a98811bf555c55aa16475e02aac5e04c": "3f88b1c690ad0a62ee34f2dccb8d5bc2",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/a89b11b0f7940f36c52ed40528d2373e53197d": "2c0bdedc811a5dc3231766705cade4f7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/a441185a1268ae90fb4df6f9d5b392795b23b1": "5b8f341193f4f1d1b6d5e93e71af9cd5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/5b071b430a9850fdadb70646a73fdae92fb483": "993f33e8a58d0d9383cfcfab8b0e3f54",
".git/objects/e8/9b380f1ced55b29c28fdba9dc8e51930bff07f": "3a3217e3054609c1af6667725d0a9c31",
".git/objects/ea/5f53a13965100ddd7e18ed6755fb3b510b71bb": "8b3b83ca61e5efdbdcc283d5aac7a875",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/8bd0f08f3b116b23d6726702e4f08e10ad70b8": "0cb94c4ad3b5844c7eb724a6c91db909",
".git/objects/f7/42ad369b6e7edaa4455105bc8ef850cd914838": "7a4df99452590ee29c2ba1dea1dbfb54",
".git/objects/fa/3682dcb8c0ff6cc438e37b61154ce24ae04a3d": "5650bea7b5b52e2d28a8df2dd80578bb",
".git/objects/fa/58943d38eb006b118a0d058e5b50aa67533d84": "65727f29fbef285095d678cd1e0d24ac",
".git/objects/ff/294c5f0b08ac9bf93b43d7d19872fbca0a0aec": "42961d99e2e2414a5dcc2745a2b54a84",
".git/refs/heads/master": "5eee5da15b36ed470ed02c48780a47f0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "5eee5da15b36ed470ed02c48780a47f0",
"assets/AssetManifest.bin": "fb00f923effa16401382b62fb7850864",
"assets/AssetManifest.bin.json": "0c2ddc63104ae51b8e986252bdd939ae",
"assets/AssetManifest.json": "24393805912a68146487f2badebcb355",
"assets/assets/images/Foto.jpg": "f12088cc06819f9988459942f8ddb0ce",
"assets/assets/images/fotoparamo.jpg": "b457f8f2e60ddd10c0dc19f1d5994dd7",
"assets/assets/logos/default-logo.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/logos/discord.png": "09016d4d7dc5ac3c995199a3d15a9879",
"assets/assets/logos/github.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/logos/innvestock-logo.png": "9e984d678f270aa4289801c60cec9aae",
"assets/assets/logos/linkedin.png": "824be55e0b767fdb008018d2019f2f3f",
"assets/assets/videos/e-commerce.mp4": "d3beef1718ac3bbfa05530dc7d056524",
"assets/assets/videos/innvestock-preview.mp4": "6a2400ce5332cd7dd8a8d09f026534e7",
"assets/assets/videos/tuten.mp4": "237df3d8bbb2c2ddc2843ca2dc7eb436",
"assets/FontManifest.json": "24ef04d90e18e89cdaabca4e9dee98ad",
"assets/fonts/Itim/Itim-Regular.ttf": "4a3f2cf1ced5257b6af803f4b86bf427",
"assets/fonts/manrope/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/fonts/manrope/Manrope-ExtraBold.ttf": "8541582abce817ab8857c51ae0a35ca9",
"assets/fonts/manrope/Manrope-ExtraLight.ttf": "100308b8ce2da4b67f4850e9b9252b26",
"assets/fonts/manrope/Manrope-Light.ttf": "9e353f65739cc41a37bed272850cf92e",
"assets/fonts/manrope/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/fonts/manrope/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/fonts/manrope/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/fonts/MaterialIcons-Regular.otf": "9f4f535be73f7adc4cd7d98d77f3cf03",
"assets/NOTICES": "71b9fb90d3b3f780599bbf390420cf21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "677da820191b2062765e36a696d7f8fc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "834262c31ee0a3f58a7fe89ae51a0a24",
"/": "834262c31ee0a3f58a7fe89ae51a0a24",
"main.dart.js": "0e8043484ee8b71225bc58656fdb1759",
"manifest.json": "42a50b3b319169df6cbf7727be84ba01",
"version.json": "79c0b7b5b4958198676a53ed296d9b85"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
