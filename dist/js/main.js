"use strict";
var menu = document.getElementsByClassName("switch");
function show() {
    var hideContent = this.nextElementSibling;
    hideContent.classList.toggle("hide");
    var switchCondition = this.children[0];
    switchCondition.classList.toggle("contentClosed");
}
/*
const show = () => {
    let hideContent = this.nextElementSibling;
    hideContent.classList.toggle('hide');
    let switchCondition = this.children[0];
    console.log(switchCondition);
    switchCondition.classList.toggle('contentClosed');
}
*/
for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", show);
}
var loaderLayer = document.getElementById("js-loadingLayer");
var loadedTransiton = function () {
    if (loaderLayer !== null) {
        loaderLayer.classList.remove("active");
    }
};
window.addEventListener("load", loadedTransiton);
var returnTop = document.getElementById("js-returntop");
var wheelScrollCancel = function (event) {
    event.preventDefault();
};
var returnTopAnimation = function () {
    document.addEventListener('wheel', wheelScrollCancel, { passive: false });
    var currentScrollPosition = 0;
    currentScrollPosition = window.scrollY || 0;
    window.scrollTo(0, Math.floor(currentScrollPosition / 1.1));
    if (currentScrollPosition > 0) {
        window.requestAnimationFrame(returnTopAnimation);
    }
    else {
        document.removeEventListener('wheel', wheelScrollCancel, { passive: false });
    }
};
returnTop.addEventListener("click", returnTopAnimation);
//モニターの高さ取得
var displayHeight = window.parent.screen.height;
var returntopAppearance = function () {
    //スクロール量
    var currentScrollPosition = 0;
    currentScrollPosition = window.scrollY || 0;
    //スクロール量が画面の高さより大きいならactive追加
    if (displayHeight < currentScrollPosition * 5) {
        returnTop.classList.add("active");
    }
    else {
        returnTop.classList.remove("active");
    }
};
document.addEventListener("scroll", returntopAppearance);
//# sourceMappingURL=main.js.map