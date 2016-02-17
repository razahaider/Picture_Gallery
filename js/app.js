

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#imageGallery a").hover(function(event){
  
  $(this).children("img").fadeOut( 100);
   $(this).children("img").fadeIn( 500);

});

$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  
  $overlay.show();
  $image.attr("src", imageLocation).addClass("animated tada");
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){

  $overlay.hide();
});











