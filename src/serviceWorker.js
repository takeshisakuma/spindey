var CACHE_NAME  = "spindey-2"; 
var urlsToCache = [ 
    "https://spindey.com/",
    "https://spindey.com/index.html"
];

//ServiceWorkerのインストール
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(
            function(cache){
                return cache.addAll(urlsToCache);
            })
    );
});

//リソースをリクエストされたときのレスポンスの作成
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(
            function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});