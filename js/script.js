$(function() {
  //ハンバーガ押したらメニュー表示
  $('.toggle-btn').click(function(){
    if ($('.header').hasClass('open')) {
      $('.header').removeClass('open');
      // $('.nav').fadeOut();
      $('.nav').animate({height:'toggle'},200);
      $('.mask').hide();
    } else {
      $('.header').addClass('open');
      // $('.nav').fadeIn();
      $('.nav').animate({height:'toggle'},200);
      $('.mask').show();
    };
  })

  $('.mask').click(function() {
    $('header').removeClass('open');
    $('nav').animate({height:'toggle'},200);
    $('.mask').hide();
  })

  $('.slick').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:false,
    dots:false,
    slidesToShow:3,
    slidesToScroll:1,
    centerMode:true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow:1,
        }
      }]
  });

  //navからのスクロール
  $('nav a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position - 20
    }, 500);
  })

});
