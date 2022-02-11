// user credential validation
document.getElementById("signin").addEventListener("click", function () {
  const userName = document.getElementById("username").value;
  const userPassword = document.getElementById("password").value;
  if (userName == "bayezid@gmail.com" && userPassword == "147369") {
    window.location.href = "bankingPage.html";
  }
});
