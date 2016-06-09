// 'use strict';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';

// ReactDOM.render(
//   <App phrase='ES6 React Class Component!'/>,
//   document.querySelector('#app')
// );


(function ($) {
	"use strict"

	$(window).scroll(function () {
		var wScroll = $(this).scrollTop();
		// console.log(wScroll);

	if(wScroll >= 0){
		$(".nav-items").children().css("color", "#f1f1f1" );
		$(".divider").css("background", "#f1f1f1" );
		console.log("Green !")
	}	
	if(wScroll >= 1066){
		$(".nav-items").children().css("color", "black" );
		$(".divider").css("background", "black" );
		console.log("Balck !")
	}	
	if(wScroll >= 1916){
		$(".nav-items").children().css("color", "#f1f1f1" );
		$(".divider").css("background", "#f1f1f1" );
		console.log("Green !")
	}

	if(wScroll >= 2996){
		$(".nav-items").children().css("color", "black" );
		$(".divider").css("background", "black" );
		console.log("Balck !")
	}


	if (wScroll >= $(".portfolio").offset().top - ($(window).height() / 2)) {
		// console.log("Hi")

		$(".portfolio a").each(function (i) {

		setTimeout(function () {
			$(".portfolio a").eq(i).addClass("is-showing");
		},150 * (i+1));


		})
	}
	
	});



// smoothScroll

    var $body,
        $window,
        settings = {
            scrollDuration: 300
        };

    function onBlankLinkClick (e) {
        var $this = $(this),
            href = $this.attr('href'),
            $target = $(href);

        if ($target.length == 0)
            return;

        e.preventDefault();

        $body.animate({
            scrollTop: $target.offset().top
        }, settings.duration);
    }

    function bindings () {
        // Smooth scroll (smoothScroll)
        $('a[href^="#"]').on('click', onBlankLinkClick);
    }



    $(document).ready(function () {
        // Variable definitions
        $body = $('html, body');
        $window = $(window);

        bindings();
        setInterval(function(){articleTada()}, 4000);
        function articleTada(){
          var randNum = Math.floor(Math.random() * $('.pf-items a').children().length) +1;
          $('.pf-items a').children().eq(randNum).addClass('tada')
            .siblings().removeClass('tada');
        }

    });



})(jQuery);

