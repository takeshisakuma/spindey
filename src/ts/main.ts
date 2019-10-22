let menu = document.getElementsByClassName("switch");

function show() {
  let hideContent = this.nextElementSibling;
  hideContent.classList.toggle("hide");
  let switchCondition = this.children[0];
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
