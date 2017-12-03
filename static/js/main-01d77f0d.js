
$(document).ready(function(){

    //fix then scroll
    $().on("scroll", function(e) {
        
      if (this.scrollTop > 147) {
        wrap.addClass("fix-search");
      } else {
        wrap.removeClass("fix-search");
      }
      
    });


    //blue-hover 

    $(".blue-hover").hover({
     

    });

});