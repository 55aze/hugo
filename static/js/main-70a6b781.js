
$(document).ready(function(){
  $(document).on("scroll", onScroll);
  
  

  //forzen nav
    var nav = $(".nav-top");
    $(window).on("scroll", function(e) {  
      if ($(this).scrollTop() > 100) {
        nav.addClass("fix-nav");
      } else {
        nav.removeClass("fix-nav");
      }
    });

  //smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  //active nav item
  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav nav div a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav nav div a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
      });
    }

  // modal 
  $(".popup img").click(function () {
    var $src = $(this).attr("src");
    $(".show").fadeIn();
    $(".img-show img").attr("src", $src);
  });

  $(".show").click(function () {
      $(".show").fadeOut();
  });
  $(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
      $(".show").fadeOut();
    }
});


    
});