import '../scss/style.scss';

let faqList = document.querySelectorAll('.p-faq__list');
for( let i =0; i < faqList.length; i++) {
  faqList[i].addEventListener('click', e => {
    e.preventDefault();
    faqList[i].querySelector('.p-faq__answer').classList.toggle('show');
  })
}

// form action
let form = document.querySelector('form');
let firstName = document.querySelector('input[name="first-name"]');
let lastName = document.querySelector('input[name="last-name"]');
let ID = document.querySelector('input[name="id"]');
let email = document.querySelector('input[name="email"]');
let password = document.querySelector('input[name="password"]');
let confirmPassword = document.querySelector('input[name="confirm-password"]');
let error = document.querySelectorAll('.error');
const errorTxt = {
  'first-name' : 'First Name',
  'last-name' : 'Last Name',
  'id' : 'ID',
  'email' : 'Email',
  'password' : 'Password',
  'confirm-password' : 'Confirm Password',
}


const reqFields = document.querySelectorAll('[data-require]');


form.addEventListener('submit', e => {
  let flag = true;
  reqFields.forEach((item, i) => {
    let err = item.parentNode.querySelector('.error')
    if(item.value === '') {
      flag = false;
      err.style.display = 'block'
      err.innerText = errorTxt[item.getAttribute('name')] + ' is Required.';
    } else {
      err.innerText = '';
      flag = false;
      if(password.value !== confirmPassword.value) {
        confirmPassword.parentNode.querySelector('.error').innerText = 'Not Same Password';
        password.parentNode.querySelector('.error').style.display = 'none';
        confirmPassword.parentNode.querySelector('.error').style.display = 'block';

        if(confirmPassword.value === '') {
          confirmPassword.parentNode.querySelector('.error').innerText = 'Confirm Password is Required.';
        }
      } else if (password.value === confirmPassword.value) {
        flag = true;
      }
    }
  })
  
  flag ? document.querySelector('.success').style.display = 'block' : e.preventDefault()
  if(!flag) {
    e.preventDefault()
  }
});
