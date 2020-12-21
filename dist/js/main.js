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
(function () {
    //トップへ戻るボタン取得
    var returnTop = document.getElementById("js-returntop");
    //関数wheelScrollCancel
    var wheelScrollCancel = function (e) {
        //早期リターンでe.targetがHTMLElementのインスタンスでない可能性を消す
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        //デフォルトの動作のキャンセル
        e.preventDefault();
    };
    //関数returnAnimation
    var returnTopAnimation = function () {
        //トップへ戻るアニメーション開始時にdocumentにホイールイベントwheelScrollCancel追加
        document.addEventListener("wheel", wheelScrollCancel, { passive: false });
        //変数currentScrollPosition(現在のスクロール位置)に0を代入
        var currentScrollPosition = 0;
        //変数currentScrollPosition(現在のスクロール位置)
        currentScrollPosition = window.scrollY || 0;
        //スクロール
        window.scrollTo(0, Math.floor(currentScrollPosition / 1.1));
        //現在位置が0より大きいとき
        if (currentScrollPosition > 0) {
            window.requestAnimationFrame(returnTopAnimation);
        }
        else {
            document.removeEventListener("wheel", wheelScrollCancel, {
            //passive: false
            });
        }
    };
    //ReturnTopにクリックイベントreturnTopAnimation追加
    returnTop.addEventListener("click", returnTopAnimation);
    //ディスプレイの高さ取得(トップへ戻る表示/非表示に使う)
    var displayHeight = window.parent.screen.height;
    //関数returnAppearanceトップへ戻るボタンの表示/非表示切り替え
    var returntopAppearance = function () {
        //変数currentScrollPosition(現在のスクロール位置)に0を代入
        var currentScrollPosition = 0;
        //変数currentScrollPosition(現在のスクロール位置)
        currentScrollPosition = window.scrollY || 0;
        //画面の高さが変数currentScrollPosition(現在のスクロール位置)*5より小さいか判定
        if (displayHeight < currentScrollPosition * 5) {
            //returnTopにactiveクラス追加
            returnTop.classList.add("active");
        }
        else {
            //returnTopからactiveクラスを外す
            returnTop.classList.remove("active");
        }
    };
    //documentにスクロールイベントreturntopAppearance追加
    document.addEventListener("scroll", returntopAppearance);
})();
//# sourceMappingURL=main.js.map