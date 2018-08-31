$(function(){

    let windowTop = 0;
    let windowBottom = 0;
    let windowHeight = $(window).height();

    // hide
    hide($('.fn-point01'));
    hide($('.fn-point02'));
    hide($('.fn-point03'));
    hide($('.fn-point04'));
    hide($('.fn-point05'));
    hide($('.fn-point06'));
    hide($('.fn-point07'));
    hide($('.fn-point08'));

    // scroll event
    $(window).scroll(function() {

        windowTop = $(this).scrollTop();
        windowBottom = windowTop + windowHeight;

        console.log(windowBottom);

        if (windowBottom > 1400) {
            show($('.fn-point01'));
            $('.fn-point01').addClass('animated fadeInLeft');
        }

        if (windowBottom > 1800) {
            show($('.fn-point02'));
            $('.fn-point02').addClass('animated fadeInRight');
        }

        if (windowBottom > 2000) {
            show($('.fn-point03'));
            $('.fn-point03').addClass('animated fadeInRight');
        }

        if (windowBottom > 2200) {
            show($('.fn-point04'));
            $('.fn-point04').addClass('animated fadeInLeft');
        }

        if (windowBottom > 2400) {
            show($('.fn-point05'));
            $('.fn-point05').addClass('animated fadeInRight');
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

