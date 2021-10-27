// $("form").on("submit", function (e) {
//   if ($("#email").val() == "") {
//     e.preventDefault();
//     $("#email-alert").show();
//   }
//   if ($("#password").val() == "") {
//     e.preventDefault();
//     $("#password-alert").show();
//   }
// });

///2) 정규식 사용

const email = $("#email").val();

$("form").on("submit", function (e) {
  if (
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email
    ) === false
  ) {
    e.preventDefault();
  } else if (email == "") {
    e.preventDefault();
  }
});

const password = $("#password").val();

$("form").on("submit", function (e) {
  if (/[A - Z] +/.test(password) == false) {
    e.preventDefault();
    alert("비번확인");
  }
});
