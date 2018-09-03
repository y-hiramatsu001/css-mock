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

        if (windowBottom > 3000) {
            $('.fn-point06').addClass('is-tween');
        }

        if (windowBottom > 3300) {
            $('.fn-point07').addClass('is-tween');
        }

    });

    // ---------------------------------------------------------------------------

    /**
     * 初期処理
     */
    function init() {
        // メインビジュアルのアニメーション
        $('.fn-pulseIn').addClass('is-tween');
    }

});

