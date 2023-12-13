importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

// This will work!
workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;

registerRoute(
    ({ url }) =>
        url.origin === 'https://fonts-googleapis.com' ||
        url.origin === 'https://fonts-gstatic.com',
    new StaleWhileRevalidate({
        cacheName: 'fonts-Google',
        plugins: [
            new ExpirationPlugin({ maxEntries: 10 }),
        ],
    })
);

registerRoute(
    ({request}) =>  request.destination ==='document'||
                    request.destination ==='script' ||
                    request.destination ==='style',
    new StaleWhileRevalidate(
        { cacheName: 'cached-files'}
    )
);




