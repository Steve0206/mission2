$(document).ready(function() {
    $('.top').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    //swiper
	const swiper = new Swiper('.swiper', {
	  // Optional parameters
	
		direction: 'horizontal',
		loop: true,
		speed:1000,
        autoplay: {
			delay:1000,
		},
		effect:'slide',

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
    //滑鼠移過去停止撥動
	swiper.el.onmouseover = function(){
		swiper.autoplay.stop();
	}

	//滑鼠移開自動撥放
	swiper.el.onmouseout = function(){
        swiper.autoplay.start();
	}

    //program
    $('.btn').click(function(event){
        event.preventDefault();
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    //QA
    $("body").on("click", ".add", function(event) {
        event.preventDefault();
        $(this).parent().siblings().find('p').slideUp('listDown').parent().siblings().find('h4').removeClass('listUp').parent().find('a').removeClass('reduce').addClass('add');
        $(this).addClass('reduce').removeClass('add').parent().find('p').slideDown('listDown').parent().find('h4').addClass('listUp');
    });
    
    $("body").on("click", ".reduce", function(event){
        event.preventDefault();
        $(this).addClass('add').removeClass('reduce').parent().find('h4').removeClass('listUp').parent().find('p').slideUp('listDown');
    });
});