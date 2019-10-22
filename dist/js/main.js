"use strict";
var menu = document.getElementsByClassName("switch");
function show() {
    var hideContent = this.nextElementSibling;
    hideContent.classList.toggle("hide");
    var switchCondition = this.children[0];
    console.log(switchCondition);
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
//# sourceMappingURL=main.js.map