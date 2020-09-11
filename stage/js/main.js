$(function () {
  "use strict";
  $(".toggle-sidebar").on("click", function () {
    $(".content-bar,.sidebar").toggleClass("no-sidebar");
  });
});
