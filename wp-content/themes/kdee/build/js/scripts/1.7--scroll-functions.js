// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SCROLL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initScrollFunctions() {

  // A.1. ON SCROLL STICKY --------------------------------

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("o-header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // A.1. END ---------------------------------------------

  // A.2. SCROLL INTO OUT OF VIEW -------------------------

  $.fn.offScreen = function(distance) {

    var $t = $(this),
      $w				    = $(window),
      viewTop			  = $w.scrollTop(),
      viewBottom		= viewTop + $w.height(),
      _top			    = $t.offset().top - distance,
      _bottom		    = $t.offset().top + $t.height() + distance;

    return {
      top: _bottom <= viewTop,
      bottom: _top >= viewBottom
    }

  };

  var win = $(window);
  var allMods = $(".a-slide-h");

  allMods.each(function(i, el) {
    var el = $(el);
    if (!el.offScreen(150).bottom) {
      el.addClass("a-vis-on");
    }
  });

  win.on("scroll resize",function(event)
  {
    allMods.each(function(i, el) {
      var el = $(el);
      if (!el.offScreen(150).top && !el.offScreen(150).bottom)
      {
        el.removeClass("a-vis-on a-scrn-t a-scrn-b");
        el.addClass("a-vis");
      }
      else
      {
        if(el.offScreen(150).top)
        {
          el.addClass("a-scrn-t");
        }
        else
        {
          el.addClass("a-scrn-b");
        }
      }
    });//allMods.each()

  });//win.scroll()

  win.trigger("scroll");

  // A.2. END ---------------------------------------------


// A.3. SCROLL TO LINK ------------------------------------------------------------------------------------------------
//
//   $('.menu-item').click(function(event){
//
//     event.preventDefault();
//     // calculate destination place
//     var dest=0;
//     if($(this.hash).offset().top > $(document).height()-$(window).height()){
//       dest=$(document).height()-$(window).height();
//     }else{
//       dest=$(this.hash).offset().top;
//     }
//     // go to destination
//     $('html,body').animate({scrollTop:dest}, 1000,'swing');
//
//     // BURGER MENU
//     $('#mobi-nav').addClass('hide-nav');
//     $('.burger').removeClass('is-active');
//
//   });

// A.3. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++