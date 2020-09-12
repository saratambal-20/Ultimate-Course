$(function () {
  "use strict";
  $(".toggle-sidebar").on("click", function () {
    $(".content-bar,.sidebar").toggleClass("no-sidebar");
  });
  $(".toggle-submenu").on("click", function () {
    $(this).toggleClass("fa-angle-right fa-angle-down");
    $(this).parent("a").next(".child-links").slideToggle();
  });
});
