if(document.cookie == "") {
  alert("Куки отсутствуют. Перенаправление на первую страницу")
  window.location.href = "index.html"
}


let form2 = document.getElementById("f2");
let firstName = document.querySelector("[name='first-name']")
let lastName = document.querySelector("[name='last-name']")
let years = document.querySelector("[name='years']")
let gender = document.querySelector(".gender")
let phone= document.querySelector("[name='phone']")
let skype = document.querySelector("[name='skype']")

let firstNamePrev = /^[a-zа-я]{1,10}[a-zа-я]{0,10}$/i;
let lastNamePrev = /^[a-zа-я]{1,10}[a-zа-я]{0,10}$/i;
let yearsPrev = /(19\d{2})|(20[0-1]\d)|(202[0-3])/
let phonePrev = /[\d\s\(\)\-]{10,12}$/g


let cookieObj = {};

function updateCookie() {
  let arr = document.cookie.split("; ")
  let item;
  for(let i = 0; i < arr.length; i++) {
    item = arr[i].split("=");
    cookieObj[item[0]] = item[1]
  }
}
updateCookie();



helloUser.innerText = "Hello, " + cookieObj.email + "!"

if(cookieObj["first_name"] !== undefined) {
  firstName.value = cookieObj["first_name"];
}
if(cookieObj["last_name"] !== undefined) {
  lastName.value = cookieObj["last_name"];
}
if(cookieObj["last_name"] !== undefined) {
  lastName.value = cookieObj["last_name"];
}
if(cookieObj["phone"] !== undefined) {
  phone.value = cookieObj["phone"];
}
if(cookieObj["years"] !== undefined) {
  years.value = cookieObj["years"];
}
if(cookieObj["gender"] !== undefined) {
  gender.value = cookieObj["gender"];
}
if(cookieObj["skype"] !== undefined) {
  skype.value = cookieObj["skype"];
}




form2.addEventListener("submit", function(e) {
  e.preventDefault();

  for(i of document.querySelectorAll("small")) {
    i.innerText = "";
  }

  let errors = 0;

  if(firstName.value == "" || !firstNamePrev.test(firstName.value)) {
    let message1 = document.querySelector(`[for="${firstName.name}"]`).nextElementSibling;
      message1.innerText = "Имя до 20 буквенных символов"
      errors++
  }
  
  if(lastName.value == "" || !lastNamePrev.test(lastName.value)) {
    let message2 = document.querySelector(`[for="${lastName.name}"]`).nextElementSibling;
      message2.innerText = "Фамилия до 20 буквенных символов"
      errors++
  }
  
  if(years.value == "" || !yearsPrev.test(years.value)) {
    let message3 = document.querySelector(`[for="${years.name}"]`).nextElementSibling;
      message3.innerText = "Год от 1900 до текущего"
      errors++
  }
  
  if(years.value == "" || !yearsPrev.test(years.value)) {
    let message3 = document.querySelector(`[for="${years.name}"]`).nextElementSibling;
      message3.innerText = "Год от 1900 до текущего"
      errors++
  }
  
  if(phone.value == "" || !phonePrev.test(phone.value)) {
    let message4 = document.querySelector(`[for="${phone.name}"]`).nextElementSibling;
      message4.innerText = "Внесите номер телефона (10-12 цифр)"
      errors++
  }

  if(errors == 0) {
    document.cookie = "first_name=" + firstName.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/";
    document.cookie = "last_name=" + lastName.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/";
    document.cookie = "phone=" + phone.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/";
    document.cookie = "years=" + years.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/";
    document.cookie = "gender=" + gender.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/";
    document.cookie = "skype=" + skype.value + "; expires=" + new Date(Date.now() + 1000*60*60) + "; path=/";
    
    updateCookie();
    console.log(cookieObj)
  }
})



exit.addEventListener("click", function() {
  
  document.cookie = "email= #; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"
  document.cookie = "first_name=" + firstName.value + "; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"
  document.cookie = "last_name=" + lastName.value + "; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"
  document.cookie = "phone=" + phone.value + "; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"
  document.cookie = "years=" + years.value + "; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"
  document.cookie = "gender=" + gender.value + "; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"
  document.cookie = "skype=" + skype.value + "; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"
  document.cookie = "pass=" + skype.value + "; expires= Thu, 14 Feb 2019 08:12:40 GMT; path=/"

  window.location.href = "index.html"
  
  alert("Очистка данных. Перенаправление на страницу регистрации")
}
)
