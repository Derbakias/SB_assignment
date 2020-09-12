// global variables
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const validationMessage = document.querySelectorAll(
  ".validation-msg"
);
const password = document.getElementById("password");
const saved = document.getElementById("stay-in");

// event listeners
form.addEventListener("keyup", validator);
form.addEventListener("submit", submission);

// validator function to check if the input is valid
function validator(e) {
  e.preventDefault();
  console.log(email.value);
  // check if the target is the email
  if (emailValidator(email.value)) {
    messageDisplay("email", "valid");
  } else {
    messageDisplay("email", "invalid");
  }

  if (password.value.trim().length < 8) {
    messageDisplay("password", "invalid");
  } else {
    messageDisplay("password", "valid");
  }
}

// check if the input is valid email
function emailValidator(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// display the message for few seconds
function messageDisplay(field, status) {
  // display the email message
  if (field === "email") {
    if (status === "valid") {
      validationMessage[0].innerHTML = `<div class='correct'><i class="far fa-check-circle"></i> Valid Email</div>`;
    } else {
      validationMessage[0].innerHTML = `<div class='error'><i class="far fa-times-circle"></i> Your E-Mail is not valid</div>`;
    }
  }
  // display the password message
  if (field === "password") {
    if (status === "valid") {
      validationMessage[1].innerHTML = `<div class='correct'><i class="far fa-check-circle"></i> Valid Password</div>`;
    } else {
      validationMessage[1].innerHTML = `<div class='error'><i class="far fa-times-circle"></i> Your Password is not valid</div>`;
    }
  }
}

// form submit when all credentials are valid
function submission(e) {
  e.preventDefault();
  if (
    emailValidator(email.value) &&
    password.value.trim().length >= 8
  ) {
    form.innerHTML = `
    <h3 class='correct'>You have successfully logged in!</h3>
    <br>
    <h1 class='correct'>Welcome Back!</h1>`;
  } else {
    // check again what is not valid
    validator(e);
  }
}
