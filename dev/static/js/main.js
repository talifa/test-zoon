$(document).ready(function() {
  svg4everybody({});
});
jQuery(function($) {
  $(document).mouseup(function(e) {
    var div = $(".row-menu__list");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass("d-block");
    }
    $(".menu").click(function() {
      $(this)
        .children(".row-menu__list")
        .toggleClass("d-block");
    });
  });
});
