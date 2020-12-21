((): void => {
  //スイッチ要素取得
  const menuArray = Array.from(document.getElementsByClassName("switch"));

  //開閉
  const show = (e: Event): void => {
    //コンテンツ開閉

    //早期リターンでe.targetがHTMLElementのインスタンスでない可能性を消す
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    if (e.target.nextElementSibling) {
      let hideContent = e.target.nextElementSibling;
      if (e.target.nextElementSibling) {
        hideContent.classList.toggle("hide");
      }

      //コンテンツ開閉時のアイコンの表示変更
      if (e.target.children[0]) {
        let switchCondition = e.target.children[0];
        switchCondition.classList.toggle("contentClosed");
      }
    }
  };

  //各switchにクリックイベントshowを追加
  menuArray.forEach((menu): void => {
    menu.addEventListener("click", show);
  });
})();

//ローディング
((): void => {
  if (document.getElementById("js-loadingLayer")) {
    const loaderLayer = document.getElementById(
      "js-loadingLayer"
    ) as HTMLDivElement;

    const loadedTransiton = (): void => {
      loaderLayer.classList.remove("active");
    };
    window.addEventListener("load", loadedTransiton);
  }
})();
