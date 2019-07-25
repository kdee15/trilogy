// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

jQuery(document).ready(function($) {
/*
 * JavaScript Templates Runtime
 * https://github.com/blueimp/JavaScript-Templates
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define */

;(function ($) {
    'use strict'
    var tmpl = function (id, data) {
        var f = tmpl.cache[id]
        return data ? f(data, tmpl) : function (data) {
            return f(data, tmpl)
        }
    }
    tmpl.cache = {}
    tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
    tmpl.encMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
    }
    tmpl.encode = function (s) {
        return (s == null ? '' : '' + s).replace(
            tmpl.encReg,
            function (c) {
                return tmpl.encMap[c] || ''
            }
        )
    }
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return tmpl
        })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = tmpl
    } else {
        $.tmpl = tmpl
    }
}(this))
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. MOBILE CLASS
// ==
// ====== INDEX  ======================================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------
    
  var deviceAgent = navigator.userAgent.toLowerCase();

  $('html').addClass('desktop');
  
  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('ios');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/android/)) {
    $('html').removeClass('desktop');
    $('html').addClass('android');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/blackberry/)) {
    $('html').removeClass('desktop');
    $('html').addClass('blackberry');
    $('html').addClass('mobile');
  }
  
  if (deviceAgent.match(/(symbianos|^sonyericsson|^nokia|^samsung|^lg)/)) {
    $('html').removeClass('desktop');
    $('html').addClass('mobile');
  }
    
// A.1. END -----------------------------------------------------------------------------------------------------------
  
// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. GLOBAL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. FUNCTIONS -----------------------------------------

initToggleFunctions();
initSwiperFunctions();
initScrollFunctions();
initAltTextFunctions();

// A.1. END -----------------------------------------------

// A.2. SCREEN SIZE CHECK ---------------------------------
    
	var screen = $( window ).width();
	console.log('I am a device, and my width is: ' + screen);
    
// A.2. END -----------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. TOGGLE FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initToggleFunctions() {

  // A.1. GENERAL SHOW ------------------------------------

  $('.showhide').click(function(e) {

    var target = $(this).attr('href');

    if ($(target).hasClass('hidden') ) {

      $(target).removeClass('hidden');
      $('.showhide').addClass('close');

    } else {

      $(target).addClass('hidden');
      $('.showhide').removeClass('close');

    }

    e.preventDefault();

  });

  // A.1. END ---------------------------------------------

  // A.2. TOGGLE DIV --------------------------------------

  var currentContent = '';
  $('.toggle-div').on('click', function(){
    currentContent = $(this).attr('name');
    if($('#'+currentContent).hasClass('on')){
      $('#'+currentContent).removeClass('on');
      $('body').removeClass('modal-open');
    }else{
      hideAllContent();
      showCurrentContent(currentContent);
    }
  });

  function hideAllContent(){
    $('.toggle-content').removeClass('on');
    $('#'+currentContentDiv).removeClass('on');
    $('body').removeClass('modal-open');
  };

  function showCurrentContent(currentContentDiv){
    $('#'+currentContentDiv).addClass('on');
    $('body').addClass('modal-open');
  };

  // A.2. END ---------------------------------------------

  // A.4. BURGER MENU -------------------------------------

  $('.o-hamburger').on('click', function(){

    if($('.o-hamburger').hasClass('on')){
      $('.o-site-navigation').removeClass('on');
      $('.o-hamburger').removeClass('on');
    }else{
      hideBurgerMenu();
      showBurgerMenu();
    }
  });

  function hideBurgerMenu(){
    $('.o-site-navigation').removeClass('on');
    $('body').removeClass('modal-open');
  };

  function showBurgerMenu(){
    $('.o-site-navigation').addClass('on');
    $('.o-hamburger').addClass('on');
  };

  // A.4. END ---------------------------------------------

  // A.5. MODAL POPUPS ------------------------------------

  var modalContent = '';
  $('.modal-open').on('click', function(){ 
    modalContent = $(this).attr('name');
    if($('#'+modalContent).hasClass('on')){
      $('#'+modalContent).removeClass('on');
      $('body').removeClass('modal-open');
    }else{
      hideAllContent();
      showmodalContent(modalContent);
    }
  });

  function hideAllContent(){
    $('.o-modal-full').removeClass('on');
    $('body').removeClass('modal-open');
  };

  function showmodalContent(modalContentDiv){
    $('#'+modalContentDiv).addClass('on');
    $('body').addClass('modal-open');
  };

  // A.5. END ---------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. CAROUSEL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initSwiperFunctions() {

  // A.1. HOME CAROUSEL -----------------------------------

  var swiper = new Swiper('.swiper-home', {
    speed: 600,
    parallax: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // A.1. END ---------------------------------------------

  // A.2. TEAM CAROUSEL -----------------------------------

  var testimonials = new Swiper('.swiper-testimonials', {
    speed: 600,
    parallax: true,
    loop: true,
    pagination: {
      el: '.testimonials-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // A.2. END ---------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.9. AUTO HEIGHT ---------------------------------------------------------------------------------------------------

/*
    http://codepen.io/micahgodbolt/pen/FgqLc

    Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized.
    One large modification was to remove the set height before each new calculation.
*/

var equalheight;
equalheight = function (container) {
  var currentTallest = 0,
      currentRowStart = 0,
      topPosition = 0,
      currentDiv = 0,
      rowDivs = [],
      $el;
  $(container).each(function () {

    $el = $(this);
    $($el).height('auto');
    topPosition = $el.position().top;

    if (currentRowStart != topPosition) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPosition;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

$(document).ready(function() {

  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

});

$(window).resize(function() {

  equalheight('.features-block .reason-card .m-card-title');
  equalheight('.features-block .reason-card .m-card-body');

  if($(window).width() >= 767) {

    equalheight('.reasons-block .reason-card .m-card-title');
    equalheight('.reasons-block .reason-card .m-card-body');

  }

});

// A.9. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// A. SCROLL FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initAltTextFunctions() {

  // A.1. INSTA IMAGE MANIPULATE --------------------------

  $(".instagram-pics img").each(function() {
    $(this).after('<div class="m-image-text"><p class="alt">' + $(this).attr('alt') + '</p></div>');
    $(".o-insta-feed .clear a").addClass("a-btn btn-blue");
  })

  // A.1. END ---------------------------------------------

  // A.2. RANDOM BACKGROUND -------------------------------

//   var totalImages = 6;
//   // var RandomNumPath = 'http://trilogyformwork.co.za/wp-content/themes/kdee';
// //  var RandomNumPath = 'http://staging.kdee.co.za/trilogyformwork/wp-content/themes/kdee';
//   var RandomNumPath = 'http://localhost/kdee/trilogyformwork.co.za/3_root/wp-content/themes/kdee';
//   var RandomNum = Math.floor( Math.random() * totalImages);
//
//   console.log('images');
//
//   $(document).ready(function(){
//
//   	// $('#o-header').attr("style","background-image:url('"+ RandomNumPath +"/dist/images/background/bg-main"+RandomNum+".jpg')");
//     $('.article').attr("style","background-image:url('../../../../../dist/images/background/bg-main"+RandomNum+".jpg')");
//
//   });

  // A.2. END ---------------------------------------------

}
    

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FILE END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});