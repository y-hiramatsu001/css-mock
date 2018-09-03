$(function(){

    let windowTop = 0;
    let windowBottom = 0;
    let windowHeight = $(window).height();

    // 初期処理
    init();

    // scroll event
    $(window).scroll(function() {

        windowTop = $(this).scrollTop();
        windowBottom = windowTop + windowHeight;

        // console.log(windowBottom);

        // 概要のアニメーション
        if (windowBottom > 1400) {
            $('.fn-point01').addClass('is-tween');
        }

        if (windowBottom > 1800) {
            $('.fn-point02').addClass('is-tween');
        }

        if (windowBottom > 1900) {
            $('.fn-point03').addClass('is-tween');
        }

        if (windowBottom > 2200) {
            $('.fn-point04').addClass('is-tween');
        }

        if (windowBottom > 2400) {
            $('.fn-point05').addClass('is-tween');
        }

        if (windowBottom > 2600) {
            show($('.fn-point06'));
            $('.fn-point06').addClass('animated fadeIn');
        }

        if (windowBottom > 3000) {
            show($('.fn-point07'));
            $('.fn-point07').addClass('animated fadeIn');
        }

        if (windowBottom > 3200) {
            show($('.fn-point08'));
            $('.fn-point08').addClass('animated fadeIn');
        }

    });

    // ---------------------------------------------------------------------------

    /**
     * 初期処理
     */
    function init() {

        // 非表示
        // hide($('.fn-point01'));
        // hide($('.fn-point02'));
        // hide($('.fn-point03'));
        // hide($('.fn-point04'));
        // hide($('.fn-point05'));
        hide($('.fn-point06'));
        hide($('.fn-point07'));
        hide($('.fn-point08'));

        // メインビジュアルのアニメーション
        $('.fn-pulseIn').addClass('is-tween');
    }

    /**
     * 要素の表示
     * @param {jQuery Object} $obj
     */
    function show($obj) {
        $obj.css("opacity", "1");
    }

    /**
     * 要素の非表示
     * @param {jQuery Object} $obj
     */
    function hide($obj) {
        $obj.css("opacity", "0");
    }

});

