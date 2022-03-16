$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});
    
    function scrollToElement (selector) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 800);    
};

$(document).on('click', 'a.uruna', function () {
    scrollToElement($(this).attr('href'));
});


$(document).ready(function () {

    $('a[href^="#site-main"]').addClass('active');

//smoothscroll
    $('.nav-link1').on('click', function (e) {
        e.preventDefault();
        //  $(document).off("scroll");
        var athis = this;
        var target = this.hash,
                menu = target;
                $('.navbar-collapse').collapse('hide');
        $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top + 2
        }, 800,function () {
            window.location.hash = target;
            $('.nav-link1').parent().removeClass('active');
            $(athis).parent().addClass('active');

        });

    });


    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 0)
        {
            $('a[href^="#site-main"]').addClass('active');
            return;
        }

        $('.nav-link1').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link1').parent().removeClass("active");
                currLink.parent().addClass("active");
            } else {
                currLink.parent().removeClass("active");
            }
        });

    })

});


var owl5 = $('.partners-slider');
    owl5.owlCarousel({
        items: 5,
        autoplay: 500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 6,
            },
            900: {
                items: 5,
            },
            768: {
                items: 4,
            },
            480: {
                items: 3,
            },
            320: {
                items: 2,
            },
        }
    });