$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".navMenu").addClass("navBlack");
    $(".nav").addClass("navHeader");
  }
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() < 100) {
    $(".navMenu").removeClass("navBlack");
    $(".nav").removeClass("navHeader");
  }
});
