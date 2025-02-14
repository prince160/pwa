self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('currency-converter-v1').then(cache => {
            return cache.addAll([
                '/pwa/index.html',
                '/pwa/manifest.json',
                '/pwa/service-worker.js',
                '/pwa/icon1.png',
                '/pwa/icon2.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
