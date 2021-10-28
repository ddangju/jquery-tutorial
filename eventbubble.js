$(".modalContainer").click(function (e) {
  //if(e.target == e.currentTarget)
  if (e.target.className == "modalContainer") {
    $(".modalContainer").css("transform", "translateY(-1000px)");
  }
});
