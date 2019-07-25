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