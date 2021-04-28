/* eslint-disable no-restricted-globals */

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("my-store").then((cache) =>
            cache.addAll([
                "/index.html",
                //'/pwa-examples/a2hs/index.html',
            ])
        )
    );
});

self.addEventListener("fetch", (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
