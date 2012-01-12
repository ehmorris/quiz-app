// makes label fill full height of its parent option
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

// on load
$(function() {

  $('ul.indicators .active').nextAll().addClass('inactive');
  
  fix_option_label_height();
  
  $('ul.options li a.option').click(function() {
  
    // remove clicked class from any other options
    $('ul.options li.clicked').removeClass('clicked');
    
    $(this).parent().addClass('clicked');
    
    fix_option_label_height();
    
    // makes next button fill full height of its parent option 
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

// flash an error message
/*
$('.message .error').fadeIn(100).delay(500).fadeOut(500);
*/