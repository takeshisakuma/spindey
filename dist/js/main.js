"use strict";
var menu = document.getElementsByClassName('switch');
function show() {
    var hideContent = this.nextElementSibling;
    hideContent.classList.toggle('hide');
    var switchCondition = this.children[0];
    console.log(switchCondition);
    switchCondition.classList.toggle('contentClosed');
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
    menu[i].addEventListener('click', show);
}
//# sourceMappingURL=main.js.map