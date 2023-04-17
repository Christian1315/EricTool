const togglePassword1 = document.querySelector('#togglePassword1');
const togglePassword2 = document.querySelector('#togglePassword2');
const togglePassword3 = document.querySelector('#togglePassword3');


const password1 = document.querySelector('.inputEyeId1');
const password2 = document.querySelector('.inputEyeId2');
const password3 = document.querySelector('.inputEyeId3');



togglePassword1.addEventListener('click', () => {
  const type = password1.getAttribute('type') === 'password' ?
    'text' : 'password';
  password1.setAttribute('type', type);
  // Toggle the eye and bi-eye icon
  this.classList.toggle('bi-eye-slash');
});

togglePassword2.addEventListener('click', () => {
  const type = password2.getAttribute('type') === 'password' ?
    'text' : 'password';
  password2.setAttribute('type', type);
  // Toggle the eye and bi-eye icon
  this.classList.toggle('bi-eye-slash');
});

togglePassword3.addEventListener('click', () => {
  const type = password3.getAttribute('type') === 'password' ?
    'text' : 'password';
  password2.setAttribute('type', type);
  // Toggle the eye and bi-eye icon
  this.classList.toggle('bi-eye-slash');
});