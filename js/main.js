Site = {}

$(document).ready(function(){
  Site.body = $('body');
  Site.window_height = $(window).height();
  Site.window_width = $(window).width();

  $('.process_section_heading').on('click', function(){
    $(this).parent().toggleClass('open');
  })

  $('.smooth_nav').on('click', smoothScroll);
  $('.zoom_image').on('click', openZoomImage)
  $('#zoom_image_container').on('click', closeZoomImage);
  $('.transition_button').on('click', transitionTabletSection);
})

smoothScroll = function(e){
  e.preventDefault();
  var font_size = parseInt($('html').css('font-size'));
  var target = $(this).attr('href');
  if ($(this)[0].classList.contains('internal')){
    var scroll_to = $(target).offset().top - (font_size * 5);
  }else{
    var scroll_to = $(target).offset().top + (font_size * 4);
  }
  $("html, body").animate(
    { scrollTop: scroll_to + "px" }, 500
  );
}

openZoomImage = function(e){
  console.log($(this)[0]);
  $('#zoom_image_container').css('background-image', 'url(' + $(this).attr('data-large') + ')');
  $('#site').addClass('open');
}

closeZoomImage = function(e){
  $('#site').removeClass('open');
}

transitionTabletSection = function(e){
  $(this).closest('.artists_wrapper').toggleClass('slide_over');
}