let form1 = document.getElementById("f1");
let email = document.querySelector("[name='email']")
let pass = document.querySelector("[name='password']")
let repeat = document.querySelector("[name='repeat']")


let emailPrev = /^[a-z][a-z_\.\-]{2,}@[a-z\.]*[a-z]$/i;
let passPrev = /(?=.*[0-9])(?=.*[A-ZА-Я])(?=.*[a-zа-я]).{6,}/g;

let cookieObj = {};
let arr = document.cookie.split("; ")
  let item;
  for(let i = 0; i < arr.length; i++) {
    item = arr[i].split("=");
    cookieObj[item[0]] = item[1]
  }

if(cookieObj["email"] !== undefined && cookieObj["pass"] !== undefined) {
  alert("Данные есть в базе. Переход на следующую страницу")
  window.location.href = "info.html";
}

form1.addEventListener("submit", function(e) {
  e.preventDefault();
  let errors = 0;

  for(i of document.querySelectorAll("small")) {
    i.innerText = "";
  }

  if(!emailPrev.test(email.value) || email.value == "") {
    let message1 = document.querySelector(`[for="${email.name}"]`).nextElementSibling;
    message1.innerText = "Внесите корректный почтовый адрес"
    errors++
  }
  if(!passPrev.test(pass.value) || pass.value == "") {
    let message2 = document.querySelector(`[for="${pass.name}"]`).nextElementSibling;
    message2.innerText = "Обязательны 1 заглавная, 1 строчная буквы и 1 цифра (от 6 символов)"
    errors++
  }
  if(repeat.value !== pass.value || repeat.value == "") {
    let message3 = document.querySelector(`[for="${repeat.name}"]`).nextElementSibling;
    message3.innerText = "Повторите пароль"
    errors++
  }

  if(errors == 0) {
    alert("Vse norm")
    document.cookie = "email=" + email.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/"
    document.cookie = "pass=" + pass.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/"
    
    window.location.href = 'info.html'
  }
})
