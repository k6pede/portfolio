$(function(){


  $('.toggle_btn').on('click',function() {

    if($('#header').hasClass('open')) {

      $('#header').removeClass('open');

    }else {

      $('#header').addClass('open');
      
    }
  });

  $('#mask').on('click', function() {

    $('#header').removeClass('open');
  });
});





function fadeAnime(){

      // console.log($(this).scrollTop()) });


      // console.log($("#works").offset().top);
      // console.log($("#about").offset().top);
      // console.log($("#contact").offset().top);

      $('#header').each(function(){ //fadeInUpTriggerというクラス名が
        const elemPos = $(this).offset().top-50; //要素より、50px上の
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        // 画面内に入ったらfadeInというクラス名を追記
        }else{
        $(this).removeClass('fadeUp');
        // 画面外に出たらfadeInというクラス名を外す
        }
        });
      $('#works').each(function(){ //fadeInUpTriggerというクラス名が
        const elemPos = $(this).offset().top-50; //要素より、50px上の
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        // 画面内に入ったらfadeInというクラス名を追記
        }else{
        $(this).removeClass('fadeUp');
        // 画面外に出たらfadeInというクラス名を外す
        }
        });
      $('#about').each(function(){ //fadeInUpTriggerというクラス名が
        const elemPos = $(this).offset().top-50; //要素より、50px上の
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        // 画面内に入ったらfadeInというクラス名を追記
        }else{
        $(this).removeClass('fadeUp');
        // 画面外に出たらfadeInというクラス名を外す
        }
        });
      $('#contact').each(function(){ //fadeInUpTriggerというクラス名が
        const elemPos = $(this).offset().top-50; //要素より、50px上の
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        // 画面内に入ったらfadeInというクラス名を追記
        }else{
        $(this).removeClass('fadeUp');
        // 画面外に出たらfadeInというクラス名を外す
        }
        });

};
$(window).scroll(function(){
  fadeAnime();
});

