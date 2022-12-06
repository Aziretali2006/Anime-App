const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submit_btn = document.querySelector(".button_btn");
const error = document.querySelector(".error");

const users = JSON.parse(localStorage.getItem("users"))

submit_btn.addEventListener("click", (event) => {
  event.preventDefault();

  const isUser = !!users.find(item => item.email === emailInput.value)

  if(emailInput.value !== "" && passwordInput.value !== "") {
    if(isUser) {
      localStorage.setItem("isAuth", "true")
      window.open("./index.html" , "_self")
    } else {
      error.innerHTML = "Данный пользователь не найден"
    }
  } else {
    error.innerHTML = "Все поля обьязательны к заполнению"
  }
})

window.addEventListener("load", () => {
  if(localStorage.getItem("isAuth") === true) {
    window.open("./index.html", "_self")
  }
})