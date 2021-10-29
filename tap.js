// // console.log($(".tab-button").eq());

// ///1) 반복하는코드 함수로 만들어서 콜백함수로 들어감
for (let i = 0; i < 3; i++) {
  $(".tab-button")
    .eq(i)
    .click(function () {
      tabOpen(i);
    });
}
function tabOpen(num) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");

  $(".tab-button").eq(num).addClass("active");
  $(".tab-content").eq(num).addClass("show");
}

// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");

//     $(".tab-button").eq(0).addClass("active");
//     $(".tab-content").eq(0).addClass("show");
//   });
// $(".tab-button")
//   .eq(1)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");

//     $(".tab-button").eq(1).addClass("active");
//     $(".tab-content").eq(1).addClass("show");
//   });
// $(".tab-button")
//   .eq(2)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");

//     $(".tab-button").eq(2).addClass("active");
//     $(".tab-content").eq(2).addClass("show");
//   });

////2.html의 값을 가져와 tab변경하기(이벤트버블링 활용하기)

$(".list").click(function (e) {
  // tabOpen(e.target);
  tabOpen(e.target.dataset.a);
  // console.log(e.target);
});
function tabOpen(a) {
  console.log(a);
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");

  $(".tab-button").eq(a).addClass("active");
  $(".tab-content").eq(a).addClass("show");
}

///3. 제이쿼리방식으로 html에 몰래 정보를 저장하는 법

$(".list").data("작명", "값");

///꺼내올때
$(".list").data("작명");

console.log($(".list").data("hey", "A"));
