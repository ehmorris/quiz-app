$(function() {

  $('ul.indicators .active').nextAll().addClass('inactive');
  
  $('ul.options li').each(function() {
  
    if ($(this).children('a').children('.o_label').outerHeight() < $(this).children('a').outerHeight()) {
      $(this).children('a').children('.o_label').css({
        'padding-top': 0,
        'padding-bottom': 0,
        'height': $(this).children('a').outerHeight() + 'px',
        'line-height': $(this).children('a').outerHeight() + 'px'
      });
    }
  });
});