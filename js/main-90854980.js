
$(document).ready(function(){
    var nav = $(".nav-top");
    $(window).on("scroll", function(e) {  
      if ($(this).scrollTop() > 100) {
        nav.addClass("fix-nav");
      } else {
        nav.removeClass("fix-nav");
      }
      
    });
});