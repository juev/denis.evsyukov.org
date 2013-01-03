function resizePages() {
    var h = $(window).height();
    var height  =  h < 600 ? 600 : h;
    $('section').css('height',height);
    $('firstSection').css('height',height*0.98);
}

$(document).ready(function() {
    // Smooth scrolling for internal links
    $("a[href^='#']").click(function(event) {
        event.preventDefault();

        var $this = $(this),
            target = this.hash,
            $target = $(target);

        $(scrollElement).stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
//            window.location.hash = target;
        });

    });

    var scrollElement = 'html, body';
    $('html, body').each(function () {
        var initScrollTop = $(this).attr('scrollTop');
        $(this).attr('scrollTop', initScrollTop + 1);
        if ($(this).attr('scrollTop') == initScrollTop + 1) {
            scrollElement = this.nodeName.toLowerCase();
            $(this).attr('scrollTop', initScrollTop);
            return false;
        }
    });

    //resize
    $(window).resize(function(e) {
        resizePages();
    });
    resizePages();

    //scroll
    $(window).scroll(function(e) {
        var top = $(document).scrollTop();
        var wHeight = Math.max(640,$(window).height());
    });
});
