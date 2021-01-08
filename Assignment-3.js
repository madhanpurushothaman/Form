const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("E-mail");
const password = document.getElementById("password");
const conform_password = document.getElementById("conform_password");
var flag = false;
/** Event listener to submit button in the form */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  console.log(flag);
  if (!flag) {
    console.log("entered to reset");
    setTimeout(Reset, 2000);
  }
});
/**
 * To validate the input text
 */
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const conform_passwordValue = conform_password.value.trim();
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (usernameValue === "") {
    flag = true;
    SetErrorFor(username, " Username is required");
  } else {
    flag = false;
    setSuccessfor(username);
  }

  if (emailValue === "") {
    flag = true;
    SetErrorFor(email, " Email is required");
  } else if (!reg.test(emailValue)) {
    flag = true;
    SetErrorFor(email, " Email is wrong ");
  } else {
    flag = false;
    setSuccessfor(email);
  }

  if (passwordValue === "") {
    flag = true;
    SetErrorFor(password, " password required");
  } else if (passwordValue.length < 6 || passwordValue.length > 15) {
    flag = true;
    console.log(passwordValue.length);
    SetErrorFor(password, " password is less than 6 charcater");
  } else {
    flag = false;
    setSuccessfor(password);
  }

  if (conform_passwordValue === "") {
    flag = true;
    SetErrorFor(conform_password, " confirm password required");
  } else if (passwordValue != conform_passwordValue) {
    console.log("meow");
    flag = true;
    SetErrorFor(conform_password, " conform-password is not matching");
  } else if (
    conform_passwordValue.length < 6 ||
    conform_passwordValue.length > 15
  ) {
    flag = true;
    SetErrorFor(conform_password, " password is less than 6 charcater");
  } else {
    flag = false;
    setSuccessfor(conform_password);
  }
}
/**
 *
 * @param {*Each input text in form } input
 * @param {* To display error messages} message
 */
function SetErrorFor(input, message) {
  console.log("entered into seterrorfor method");
  const formcontrol = input.parentElement;
  console.log(formcontrol);
  const small = formcontrol.querySelector("small");
  small.innerText = message;
  formcontrol.className = "form-control error";
}
/**
 *
 * @param {*Each input text in form } input
 */
function setSuccessfor(input) {
  console.log("meow");
  const formcontrol = input.parentElement;
  formcontrol.className = " form-control success";
}

//** To rest the form */
function Reset() {
  var x = document.getElementById("form");
  for (i = 0; i < x.length; i++) {
    x[i].parentElement.classList.remove("success");
  }
  document.getElementById("form").reset();
}
