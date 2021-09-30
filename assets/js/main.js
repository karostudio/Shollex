function animate(idParent, sholexId) {
    var sep = true;
    $(window).scroll(function () {
      var top = $("#" + idParent).offset().top; // or var top = $('#' + sholexId ).parent().offset().top;
      var scrollTop = $(window).scrollTop();
      if (top > screen.height ){
        top = top - screen.height / 4
      } 
      if (top < scrollTop && sep) {
        $("." + sholexId).each(function () {
          let el = $(this);
          el.animate({ marginTop: "-0px" }, 1000 / el.attr("data-speed"));
        });
        sep = false;
      }
      if (top> scrollTop && !sep) {
        $("." + sholexId).each(function () {
          let el = $(this);
          el.animate(
            { marginTop: el.attr("data-max-margin") },
            1000 / el.attr("data-speed")
          );
        });
        sep = true;
      }
    });
  }
  
  animate("content", "shollex");
  animate("content2", "shollex2");
  