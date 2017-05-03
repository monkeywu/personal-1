var runOnce = false
$('document').ready(function(){
  var AnimateNumber = function(){
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({ //class counter 值設為0
      Counter: $(this).text()
      }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now)); //讀取現在的值
          }
        });
    });
  }

  $(document).scroll(function(e){
    if($(this).scrollTop()>2050){
      if(!runOnce) {
        runOnce = true
        AnimateNumber()
      }
    }
  })
});

$('document').ready(function(){
	$('.hamburger').on('click', function(){
	  $('.hamburger').toggleClass('open');
	});
})

$('document').ready(function(){
	$('.hamburger').on('click', function(){
	  $('.full-nav').fadeToggle();
	});
})

$('document').ready(function(){
	$('.head-title').fadeIn(1500);
})


$('document').ready(function(){
	$(document).scroll(function(e){
		if($(this).scrollTop()>120){
			$('.me-title').addClass('fadeInDown');
		}
		if($(this).scrollTop()>500){
			$('.detail').addClass('zoomInDown');
		}
		if($(this).scrollTop()>880){
			$('.w-title').addClass('slideInLeft');
		}
		if($(this).scrollTop()>1100){
			$('.w-1').addClass('slideInLeft');
		}
		if($(this).scrollTop()>1100){
			$('.w-2').addClass('slideInLeft');
		}
		if($(this).scrollTop()>1100){
			$('.w-3').addClass('slideInLeft');
		}
		if($(this).scrollTop()>1800){
			$('.s-title').addClass('fadeInDown');
		}
		if($(this).scrollTop()>2200){
			$('.c-bar').css({'width':'90%'});
		}
		if($(this).scrollTop()>2200){
			$('.t-bar').css({'width':'80%'});
		}
		if($(this).scrollTop()>2200){
			$('.e-bar').css({'width':'60%'});
		}
		if($(this).scrollTop()>2500){
			$('.c-title').addClass('rotateIn');
		}
		if($(this).scrollTop()>2800){
			$('.social').addClass('fadeInDownBig');
		}
	})
})

function resize()
{　 　　　　
 parent.document.getElementById("mainframe").height=document.body.scrollHeight;  //將子頁面高度傳到父頁面框架　　　　　
  }　　 