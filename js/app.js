// $(document).foundation();

$(document).ready(function() {

    //masonry
    var container = document.querySelector('#folio-grid');
    var msnry = new Masonry(container, {
        // columnWidth: 280,
        isFitWidth: true,
        isInitLayout: false
    });
    msnry._isLayoutInited = true;
    msnry.layout();

    //smooth scroll
    $(function() {
        $('.smoothscroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top - 46;
                    $('html,body').animate({
                        scrollTop: targetOffset
                    }, 600, "easeInOutSine");
                    return false;
                }
            }
        });
    });

    //ajax settings
    $.ajaxSetup({
        cache: false
    });

    $(document).ajaxComplete(function() {
        setTimeout(delayLoadSlick, 500);
        //instantiate slick
        function delayLoadSlick() {
            $(window).trigger('resize');
            $('.folio-slider').slick({
                setPosition: 0,
                dots: true,
                lazyLoad: 'ondemand'
            });
        }
    });

    //folio items
    $('.folio-fluence-marketing').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-fluence-marketing.html',
        });
    });

    $('.folio-fluence-app').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-fluence-app.html',
        });
    });

    $('.folio-shift').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-shift.html',
        });
    });

    $('.folio-saratoga-speed').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-saratoga-speed.html',
        });
    });

    $('.folio-telenav').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-telenav.html',
        });
    });

    $('.folio-huddleup').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-huddleup.html',
        });
    });

    $('.folio-breeze').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-breeze.html',
        });
    });

    $('.folio-intuit').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-intuit.html',
        });
    });

    $('.folio-ybubbles').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-ybubbles.html',
        });
    });

    $('.folio-thingsly').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-thingsly.html',
        });
    });

    $('.folio-ydn').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-ydn.html',
        });
    });

    $('.folio-ydpl').click(function() {
        $('#modal-box').foundation('reveal', 'open', {
            url: 'folio-content/folio-ydpl.html',
        });
    });

});