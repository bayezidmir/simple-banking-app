/* document.getElementById("login-submit").addEventListener("click", function () {
  // get user email
  const userEmail = document.getElementById("user-email").value;
  // get user Password
  const userPassword = document.getElementById("user-password").value;

  // validation- check email and password
  if (userEmail == "sontan@baap.com" && userPassword == "123456") {
    window.location.href = "banking.html";
  }
}); */

// Practie

document.getElementById("login-submit").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;
  if (userEmail == "son@father.com" && userPassword == "12345") {
    window.location.href = "banking.html";
  }
});
