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

    $('.add').click(function(event){
        event.preventDefault();
        $(this).parent().siblings().find('span').slideUp('listDown');
        $(this).parent().find('span').slideDown('listDown').parent().find('a').toggleClass('switch');
    });
    $('.reduce').click(function(event){
        event.preventDefault();
        $(this).parent().find('span').slideUp('listDown');
        $(this).parent().find('a').toggleClass('switch');
    });
});