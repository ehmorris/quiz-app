function fix_option_label_height() {

  $('ul.options li').each(function() {
  
    var label_height = $(this).children('a').children('.o_label').outerHeight();
    var text_height = $(this).children('a').outerHeight();
    if (label_height !== text_height) {
      $(this).children('a').children('.o_label').css({
      
        'padding-top': 0,
        'padding-bottom': 0,
        'height': text_height + 'px',
        'line-height': text_height + 'px'
      });
    }
  });
}

$(function() {

  $('ul.indicators .active').nextAll().addClass('inactive');
  
  fix_option_label_height();
  
  $('ul.options li a').click(function() {
  
    // remove any other next buttons
    $('.o_next').hide();
  
    $(this).parent().children('.o_next').show();
    
    $('ul.options li').each(function() {
      var label_height = $(this).children('.o_next').outerHeight();
      var text_height = $(this).children('a').outerHeight();
      if (label_height !== text_height) {
        $(this).children('.o_next').children('a').css({
        
          'padding-top': 0,
          'padding-bottom': 0,
          'height': text_height + 'px',
          'line-height': text_height + 'px'
        });
      }
    });
  });
});

// listen for resize, and recheck for layout tweaks
$(window).resize(function() {

  fix_option_label_height();
});