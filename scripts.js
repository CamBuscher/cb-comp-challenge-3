$('.progress-fill').on('mousemove', displayTooltip);
$('.progress-fill').on('mouseleave', hideTooltip);

$('.vertical .progress-fill .percentage').each(function(){
  var percent = $(this).html();
  var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
  $(this).parent().css({
    'height' : percent,
    'top' : pTop
  });
});

function displayTooltip(e) {
  var x = e.pageX; 
  var y = e.pageY;
  $('.info-card').css('display', 'inline-flex');
  $('.info-card').css('position', 'absolute');
  $('.info-card').css('left', x - 75);
  $('.info-card').css('top', y - 100);
  $('.info-card').children('.card-text').text($(this).find('.tooltip-description').text());
}

function hideTooltip() {
  $('.info-card').css('display', 'none');
}