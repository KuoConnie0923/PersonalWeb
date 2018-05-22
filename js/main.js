
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	// skills chart
	$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		console.log(top)
		if(top<-300){
			if(index==0){	
			
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
			index++;
		}
	})
	//console.log(nagativeValue)
	});
	
	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
  //fancybox
  $(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 410) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});
    

    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
  });	
  
    /*---------------------------------------------*
     * Isotop for portfolio
     ---------------------------------------------*/

     $(function () {
      // init Isotope
      var $grid = $('.portfolio-one').isotope({
          itemSelector: '.portfolio-item2',
          layoutMode: 'fitRows'
      });
      // filter functions
      var filterFns = {
          // show if number is greater than 50
          numberGreaterThan50: function () {
              var number = $(this).find('.number').text();
              return parseInt(number, 10) > 50;
          },
          // show if name ends with -ium
          ium: function () {
              var name = $(this).find('.name').text();
              return name.match(/ium$/);
          }
      };
      // bind filter button click
      $('.filters-button-group').on('click', 'button', function () {
          var filterValue = $(this).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[ filterValue ] || filterValue;
          $grid.isotope({filter: filterValue});
      });
      // change is-checked class on buttons
      $('.button-group').each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function () {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $(this).addClass('is-checked');
          });
      });

  });

}());


}
main();