$("button").click(function SignUpCheck() {
  var nameCheck = document.getElementById("Name").value;
  var emailCheck = document.getElementById("Email").value;
  var usernameCheck = document.getElementById("Username").value;
  var pw1 = document.getElementById("Password1").value;
  var pwck1 = document.getElementById("Password2").value;

  var value = $("#Password1").val();

  // var pw2 = document.getElementById("Password2").value;
  // var pwck2 = document.getElementById("Password2").value;

  if (nameCheck == null || nameCheck == "") {
    alert("姓名未填寫");
    return false;
  } else if (emailCheck == null || emailCheck == "") {
    alert("信箱未填寫");
    return false;
  } else if (usernameCheck == null || usernameCheck == "") {
    alert("使用者名稱未填寫");
    return false;
  } else if (pw1 == null || pw1 == "") {
    alert("使用者密碼未填寫");
    return false;
  } else if (pwck1 == null || pwck1 == "") {
    alert("驗證使用者密碼未填寫");
    return false;
  } else if (value.length < 8) {
    alert("密碼太短");
    return false;
  } else if (pw1 !== pwck1) {
    alert("密碼不一致");
    return false;
  } else {
    location.href = "order.html";
  }
});

$("#Password1").keyup(function PasswordLength() {
  var value = $(this).val();
  if (value.length < 8) {
    $("#warr").text("密碼太短");
  } else {
    $("#warr").text("");
  }
});
$("#Password2").keyup(function PasswordCheck() {
  var pw = $("#Password1").val();
  var pwck = $(this).val();
  var value = $(this).val();
  if (pw !== pwck) {
    $("#warr").text("密碼不一致");
  } else if (value.length < 8) {
    $("#warr").text("密碼太短");
  } else {
    $("#warr").text("密碼一致");
  }
});
