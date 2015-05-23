$(document).foundation();


    docReady(function() {

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
                        var targetOffset = $target.offset().top - 80;
                        $('html,body').animate({
                            scrollTop: targetOffset
                        }, 600, "easeInOutSine");
                        return false;
                    }
                }
            });
        });

    });