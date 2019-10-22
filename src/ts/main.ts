let menu = document.getElementsByClassName("switch");

function show() {
  let hideContent = this.nextElementSibling;
  hideContent.classList.toggle("hide");
  let switchCondition = this.children[0];
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

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", show);
}


const loaderLayer = document.getElementById("js-loadingLayer");
const loadedTransiton = () => {
  if (loaderLayer !== null) {
    loaderLayer.classList.remove("active");
  }
}
window.addEventListener("load", loadedTransiton);








const returnTop = document.getElementById("js-returntop");

const wheelScrollCancel = (event) => {
  event.preventDefault();
}

const returnTopAnimation = () => {

  document.addEventListener('wheel', wheelScrollCancel, { passive: false });

  let currentScrollPosition = 0;

  currentScrollPosition = window.scrollY || 0;

  window.scrollTo(0, Math.floor(currentScrollPosition / 1.1));

  if (currentScrollPosition > 0) {
    window.requestAnimationFrame(returnTopAnimation);
  } else {

    document.removeEventListener('wheel', wheelScrollCancel, { passive: false });
  }
}

returnTop.addEventListener("click", returnTopAnimation);


//モニターの高さ取得
const displayHeight = window.parent.screen.height;

const returntopAppearance = () => {
  //スクロール量
  let currentScrollPosition = 0;
  currentScrollPosition = window.scrollY || 0;

  //スクロール量が画面の高さより大きいならactive追加
  if (displayHeight < currentScrollPosition * 5) {
    returnTop.classList.add("active");
  } else {
    returnTop.classList.remove("active");
  }

}

document.addEventListener("scroll", returntopAppearance);
