let test = 1;

$(".next").click(function () {
  if (test == 1) {
    $(".slideContainer").css("transform", "translateX(-100vw)");
    test = test + 1;
  } else if (test == 2) {
    $(".slideContainer").css("transform", "translateX(-200vw)");
    test = test + 1;
  }
});

$(".next2").click(function () {
  if (test == 3) {
    $(".slideContainer").css("transform", "translateX(-100vw)");
    test = test - 1;
  } else if (test == 2) {
    $(".slideContainer").css("transform", "translateX(0vw)");
    test = test - 1;
  }
});
