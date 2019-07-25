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