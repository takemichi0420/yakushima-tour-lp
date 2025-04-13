$(document).ready(function () {
    // ページ高さの1/4をスクロールしたらポップアップ表示
    const triggerHeight = $(document).height() * (1 / 4);

    //
    $(window).scroll(function () {
        if (!sessionStorage.getItem("popupClosed") && $(window).scrollTop() >
            triggerHeight) {
            $("#popup-banner").fadeIn();
            $("#overlay").fadeIn();
        }
    });


    // 閉じるボタンを押したら非表示にして保存
    $(".popup-close").on("click", function () {
        $("#popup-banner").fadeOut();
        $("#overlay").fadeOut();
        sessionStorage.setItem("popupClosed", "true");
    });

    // スムーズスクロール機能
    $(".scrollToSection").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#section1").offset().top
        }, 800);
    });

    // カルーセルのインジケーター自動生成
    const $carousel = $("#carouselExample");
    const $indicators = $(".carousel-indicators");
    const $items = $carousel.find(".carousel-item");

    $indicators.empty();

    $items.each(function (index) {
        const isActive = index === 0 ? "active" : "";
        const $button = $(
            '<button type="button" data-bs-target="#carouselExample" data-bs-slide-to="' +
            index + '" class="' + isActive + '"></button>'
        );
        $indicators.append($button);
    });
});