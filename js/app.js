
$(document).ready(function () {
    // Counter
    $(window).on("load resize",function() {

        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];

        for (i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }

        var count = function(start, value, id) {
            var localStart = start;
            setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
            }, 40);
        }

        for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }
    });
    //hero slider
    $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:8500,
    autoplayHoverPause:true,
    dots:false,
    smartSpeed: 1000,
    navText:['Prev','Next'],
    responsive:{
        0:{
            nav: false,
        },
        768:{
            nav: true,
        },
    }
    })

    //him slider
    $('#tim-slider').owlCarousel({
    loop:true,
    margin:24,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    smartSpeed: 1000,
    navText:['Prev','Next'],
    responsive:{
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1140:{
            items: 2,
            center: true,
        },
    }
    })

    $('.navbar a').on('click', function (e) {
        if(this.hash !=='') {
            e.preventDefault();
            const hash = this.hash
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    })
})
