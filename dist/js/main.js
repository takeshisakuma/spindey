"use strict";
(function () {
    //スイッチ要素取得
    var menuArray = Array.from(document.getElementsByClassName("switch"));
    //開閉
    var show = function (e) {
        //コンテンツ開閉
        //早期リターンでe.targetがHTMLElementのインスタンスでない可能性を消す
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        if (e.target.nextElementSibling) {
            var hideContent = e.target.nextElementSibling;
            if (e.target.nextElementSibling) {
                hideContent.classList.toggle("hide");
            }
            //コンテンツ開閉時のアイコンの表示変更
            if (e.target.children[0]) {
                var switchCondition = e.target.children[0];
                switchCondition.classList.toggle("contentClosed");
            }
        }
    };
    //各switchにクリックイベントshowを追加
    menuArray.forEach(function (menu) {
        menu.addEventListener("click", show);
    });
})();
//ローディング
(function () {
    if (document.getElementById("js-loadingLayer")) {
        var loaderLayer_1 = document.getElementById("js-loadingLayer");
        var loadedTransiton = function () {
            loaderLayer_1.classList.remove("active");
        };
        window.addEventListener("load", loadedTransiton);
    }
})();
//# sourceMappingURL=main.js.map