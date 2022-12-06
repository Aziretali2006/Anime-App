const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submit_btn = document.querySelector(".button_btn");
const error = document.querySelector(".error");

window.addEventListener("load", () => {
  if(!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]))
  }
})

const users = JSON.parse(localStorage.getItem("users"))

submit_btn.addEventListener("click", (event) => {
  event.preventDefault();

  const isUser = !!users.find(item => item.email === emailInput.value)

  if(emailInput.value !== "" && passwordInput.value !== "") {
    if(isUser) {
      error.innerHTML = "Пользователь с тaким именем уже существует"
    } else {
      const allusers = JSON.parse(localStorage.getItem("users"));

      localStorage.setItem("users",
        JSON.stringify(
          [
            ...allusers,
            {email:emailInput.value, password:passwordInput.value}
          ]
        )
      )
      window.open("./auth.html" , "_self")
    }
    emailInput.value = "";
    passwordInput.value= "";
  } else {
    error.innerHTML = "Нужно заполнить все строки!"
  }
})

window.addEventListener("load", () => {
  if(localStorage.getItem("isAuth") === "true") {
    window.open("./index.html" , "_self")
  }
})