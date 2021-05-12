 // js
 $('.popup-youtube').on('click',function(){
    var target = $(this).attr('data-id');
    $.magnificPopup.open({
      items: {
        src: '<div class="movie-wrap"><iframe width="100%" height="360" src="https://www.youtube.com/embed/-3RyqCAJkRU" + target + '?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
        type: 'inline',
        modal: true
      }
    });
  });