const btn = document.querySelector('.six_btn');
const passwordOne = document.querySelector('#pass1');
const passwordTwo = document.querySelector('#pass2');


btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (passwordOne.value == "") {
    passwordOne.style.border = '3px solid red'
    passwordTwo.style.border = '3px solid red'
  } else if (passwordOne.value == passwordTwo.value ) {
    passwordOne.style.border = '3px solid green'
    passwordTwo.style.border = '3px solid green'
  } else {
    passwordOne.style.border = '3px solid red'
    passwordTwo.style.border = '3px solid red'
  }
});

