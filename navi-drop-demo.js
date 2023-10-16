$(document).ready(function () {
  // ボタンがクリックされたら
  $(".openbtn1").click(function () {
    // ボタン自身に active クラスを付与し
    $(this).toggleClass("active");
    // ナビゲーションに panelactive クラスを付与
    $("#g-nav").toggleClass("panelactive");
  });

  // ナビゲーションのリンクがクリックされたら
  $("#g-nav a").click(function () {
    // ボタンの active クラスを除去し
    $(".openbtn1").removeClass("active");
    // ナビゲーションの panelactive クラスも除去
    $("#g-nav").removeClass("panelactive");
  });

  // メニュー項目をクリックしたら
  $("#g-nav-list li").click(function () {
    // クリックされたメニュー項目のサブメニューを表示
    $(this).find("ul").toggleClass("active-submenu");
  });
});