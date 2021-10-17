// ハンバーガーメニュー用Activeクラス付与
$(".menubtn").click(function () {
  $(this).toggleClass('active');
  $(".hMenu").toggleClass('panelactive');
});

$(".hMenu a").click(function() {
  $(".menubtn").removeClass('active');
  $(".hMenu").removeClass('panelactive');
  $(".polc")
});


// ページスクロールによって引き出す関数
$(window).scroll(function (){
  fadeAnime();
});


// スクロール動作で動く用
function fadeAnime() {

  $('.zoomInTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomIn');
    }else{
    $(this).removeClass('zoomIn');
    }
  });

  $('.bgappearTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');
		}else{
			$(this).removeClass('bgappear');
		}
	});

  $('.bgLRextendTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgLRextend');
		}else{
			$(this).removeClass('bgLRextend');
		}
	});

  $('.bgRLextendTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgRLextend');
		}else{
			$(this).removeClass('bgRLextend');
		}
	});

  // 下から順に上がってくる要素
  $('.fadeTrigger').each(function() {
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });

  // 左からクルっと回る要素
  $('.flipTrigger').each(function(){
    var elemPos = 
    $(this).offset().top-100;

      var scroll = 
    $(window).scrollTop();
      var windowHeight = 
    $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeft');
      }else{
        $(this).removeClass('flipLeft')
      }
  });
}




// トップ画像スクロールで拡大
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('#top_view').css({
    transform: 'scale('+(100+scroll/10)/100+')',
    top:-(scroll/50) + "%",
  });
  $('#archive_view').css({
    transform: 'scale('+(100+scroll/10)/100+')',
    top:-(scroll/50) + "%",
  });
  $('#about_view').css({
    transform: 'scale('+(100+scroll/10)/100+')',
    top:-(scroll/50) + "%",
  });
  $('#service_view').css({
    transform: 'scale('+(100+scroll/10)/100+')',
    top:-(scroll/50) + "%",
  });
  $('#contact_view').css({
    transform: 'scale('+(100+scroll/10)/100+')',
    top:-(scroll/50) + "%",
  });
  
});



// ローディング画面構成要素
$(window).on('load',function(){
  $("#splash").delay(100).fadeOut('slow',function(){
    $('body').addClass('appear');
  });
  $('.splashbg_left').on('animationend', function() {});

  $("#splash_logo").delay(1000).fadeOut('slow');
  $("#top_splash").delay(1200).fadeOut('slow',function(){
    $('body').addClass('appear');
  });
  $('.splashbg_left').on('animationend', function() {});
});