let menu = document.getElementsByClassName('switch');

function show() {
    let hideContent = this.nextElementSibling;
    hideContent.classList.toggle('hide');
    let switchCondition = this.children[0];
    console.log(switchCondition);
    switchCondition.classList.toggle('contentClosed');
}

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', show);
}
