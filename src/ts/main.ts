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
      const hideContent = e.target.nextElementSibling;
      if (e.target.nextElementSibling) {
        hideContent.classList.toggle("hide");
      }

      //コンテンツ開閉時のアイコンの表示変更
      if (e.target.children[0]) {
        const switchCondition = e.target.children[0];
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

((): void => {
  //トップへ戻るボタン取得
  const returnTop = document.getElementById("js-returntop") as HTMLElement;

  //関数wheelScrollCancel
  const wheelScrollCancel = (e: Event): void => {
    //早期リターンでe.targetがHTMLElementのインスタンスでない可能性を消す
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    //デフォルトの動作のキャンセル
    e.preventDefault();
  };

  //関数returnAnimation
  const returnTopAnimation = (): void => {
    //トップへ戻るアニメーション開始時にdocumentにホイールイベントwheelScrollCancel追加
    document.addEventListener("wheel", wheelScrollCancel, { passive: false });

    //変数currentScrollPosition(現在のスクロール位置)に0を代入
    let currentScrollPosition = 0;

    //変数currentScrollPosition(現在のスクロール位置)
    currentScrollPosition = window.scrollY || 0;

    //スクロール
    window.scrollTo(0, Math.floor(currentScrollPosition / 1.1));

    //現在位置が0より大きいとき
    if (currentScrollPosition > 0) {
      window.requestAnimationFrame(returnTopAnimation);
    } else {
      document.removeEventListener("wheel", wheelScrollCancel, {
        //passive: false
      });
    }
  };

  //ReturnTopにクリックイベントreturnTopAnimation追加
  returnTop.addEventListener("click", returnTopAnimation);

  //ディスプレイの高さ取得(トップへ戻る表示/非表示に使う)
  const displayHeight = window.parent.screen.height;

  //関数returnAppearanceトップへ戻るボタンの表示/非表示切り替え
  const returntopAppearance = (): void => {
    //変数currentScrollPosition(現在のスクロール位置)に0を代入
    let currentScrollPosition = 0;

    //変数currentScrollPosition(現在のスクロール位置)
    currentScrollPosition = window.scrollY || 0;

    //画面の高さが変数currentScrollPosition(現在のスクロール位置)*5より小さいか判定
    if (displayHeight < currentScrollPosition * 5) {
      //returnTopにactiveクラス追加
      returnTop.classList.add("active");
    } else {
      //returnTopからactiveクラスを外す
      returnTop.classList.remove("active");
    }
  };

  //documentにスクロールイベントreturntopAppearance追加
  document.addEventListener("scroll", returntopAppearance);
})();
