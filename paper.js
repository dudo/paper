$(document).ready(function() {
  $('.paper li').on('click', function() {
    $(this).toggleClass('completed');
  });
});
