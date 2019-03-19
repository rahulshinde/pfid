Site = {}

$(document).ready(function(){
  Site.body = $('body');
  Site.window_height = $(window).height();
  Site.window_width = $(window).width();
  Site.intro_height = $('#navigation_container').outerHeight();
  Site.content_height = $('#camila_arielle_wrapper').outerHeight() + $('#camille_madeleine_wrapper').outerHeight();
  Site.in_artist_section = false;

  $('.process_section_heading').on('click', function(){
    $(this).parent().toggleClass('open');
  })

  $('.smooth_nav').on('click', smoothScroll);
  $('.zoom_image').on('click', openZoomImage)
  $('#zoom_image_container').on('click', closeZoomImage);
  $('.transition_button').on('click', transitionTabletSection);

  $('.view_more_toggle').on('click', toggleStatement);

  scrollHandler();

  $(window).on('scroll', scrollHandler);
  $(window).on('resize', resizeHandler);
})

toggleStatement = function(){
  $(this).toggleClass('open');
  $('.view_more_container').slideToggle(1000);
  if (!$(this).hasClass('open')){
    $("html, body").animate({ scrollTop: "0" }, 1000);
  }

  setTimeout(function(){
    resizeHandler();
    scrollHandler();
  }, 1000);
}

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

resizeHandler = function (e){
  Site.window_height = $(window).height();
  Site.window_width = $(window).width();
  Site.intro_height = $('#navigation_container').outerHeight();
  Site.content_height = $('#camila_arielle_wrapper').outerHeight() + $('#camille_madeleine_wrapper').outerHeight();
}

scrollHandler = function(e){
  Site.scroll_top = $(document).scrollTop() + Site.window_height;


  if(!Site.in_artist_section && (Site.scroll_top > Site.intro_height && Site.scroll_top < Site.intro_height + Site.content_height + Site.window_height * 0.6)){
    $('#site').addClass('in_content');
    Site.in_artist_section = true;
  } else if (Site.in_artist_section && (Site.scroll_top <= Site.intro_height || Site.scroll_top >= Site.intro_height + Site.content_height + Site.window_height * 0.6)){
    $('#site').removeClass('in_content');
    Site.in_artist_section = false;
  }
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
  $('#site').toggleClass('slide_over');
}