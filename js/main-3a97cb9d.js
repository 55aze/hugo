
$(document).ready(function(){
    //fix then scroll
    $(window).on("scroll", function(e) {
      if (this.scrollTop > 100) {
        alert("scroll");
        $("#nav").addClass("fixed");
      } else {
        $("#nav").removeClass("fixed");
      }
      
    });


});