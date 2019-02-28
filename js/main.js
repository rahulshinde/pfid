Site = {}

$(document).ready(function(){
  Site.body = $('body');
  Site.window_height = $(window).height();
  Site.window_width = $(window).width();

  $('.process_section_heading').on('click', function(){
    $(this).parent().toggleClass('open');
  })
})