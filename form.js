///1) 셔츠와 모자 선택하면 옵션박스보이게하기
// $("#option1").change(function (e) {
//   if ($("select").val() == "셔츠") {
//     $(".sizeSelect").show();
//   }
//   if ($("select").val() == "모자") {
//     $(".sizeSelect").hide();
//   }
// });

///select의 값을 가져올 때
// $("select").val()
///input의 값을 가져올 때
// $("input").val()

//// 2) js로 html에 option집어넣기!

$("#option1").change(function () {
  if ($("#option1").val() == "셔츠") {
    $("#menu").html("");
    const context = `<option>95</option><option>100<option>105</option></option>`;
    $("#menu").append(context);
    //템플릿을 만들고 append한다
  } else if ($("#option1").val() == "바지") {
    $("#menu").html("");
    const context2 = `<option>28</option><option>29</option><option>30</option>`;
    $("#menu").append(context2);
  }
});

// 만약에 option1ㄱ값이 셔츠랑 같으면\
// menu 비우고 option1

///3) 옵션박스 내용이 50개가 있다면?

///${} 변수를 넣을 수 있다

////for문 사용했을 때
// const size = [26, 27, 28, 29, 30, 31, 32];

// $("#option1").change(function () {
//   if ($("#option1").val() == "바지") {
//     $("#menu").html("");

//     for (let i = 0; i < size.length; i++) {
//       const context2 = `<option>${size[i]}</option>`;
//       $("#menu").append(context2);
//     }
//   }
// });

////foreach사용했을 떄

const size = [26, 27, 28, 29, 30, 31, 32];

$("#option1").change(function () {
  if ($("#option1").val() == "바지") {
    $("#menu").html("");
    size.forEach(function (i) {
      const context2 = `<option>${i}</option>`;
      $("#menu").append(context2);
      //6번 반복///
      //i는 size 하나하나의 데이터임
    });
  }
});
