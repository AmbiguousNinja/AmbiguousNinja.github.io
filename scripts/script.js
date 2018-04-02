// the carousel
var $carousel = null;
 
//  the draggable wapper
var $wapper = null;
 
//  the width of one item
var itemWidth = 512;
 
//  the duration of the scrolling
var scrollDuration = 300;
 
//  dragging-engine
var startDragPosition = false;

function startDrag( event ) {
  event.preventDefault();
 
  if ( $carousel.triggerHandler( 'isScrolling' ) ) {
    startDragPosition = false;
    return;
  }
  startDragPosition = event.pageX;
  $wapper.bind(
    'mousemove',
    function( e ) {
      $wapper.css({
        'marginLeft': -(itemWidth + startDragPosition - e.pageX)
      });
    }
  );
}

function stopDrag( event ) {
  event.preventDefault();
  $wapper.unbind('mousemove');
 
  if ( startDragPosition ) {
    var currentDragPosition = event.pageX;
    var direction = false;
    if ( startDragPosition < currentDragPosition ) {
      direction = 'prev';
    } else if ( startDragPosition > currentDragPosition ) {
      direction = 'next';
    }
    if ( direction ) {
      $carousel.trigger( direction );
      $wapper.animate({
        'marginLeft': -itemWidth
      }, scrollDuration);
    }
  }
  startDragPosition = false;
}
 
$(function() {
 
  //  the carousel
  $carousel = $('#carousel');
  $carousel.carouFredSel({
    width: 512 * 3,
    height: 724,
    align: false,
    items: {
      visible: 3,
      start: -1
    },
    scroll: {
      items: 1,
      duration: scrollDuration
    },
    auto: false
  });
 
  //  make the wapper draggable
  $wapper = $carousel.parent();
  $wapper.css({
    'cursor': 'move',
    'marginLeft': -itemWidth
  });
  $wapper.bind('mousedown', startDrag)
  $wapper.bind('mouseup', stopDrag)
  $wapper.bind('mouseleave', stopDrag);
});