const regForm = document.querySelector('#form-reg');
const errorSpan = document.querySelector('.error-span');
regForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    email, password, method,
  } = event.target;
  const response = await fetch('/auth/registration', {
    method,
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (data.message === 'Успешная регистрация') {
    errorSpan.style.color = 'green';
    window.location.assign('/');
  }
  errorSpan.innerText = data.message;

  // console.log('🚀 ~ regForm?.addEventListener ~ data', data);
});
// ==================================================================
const formLogin = document.querySelector('#form-login');
const errorSpanLogin = document.querySelector('.error-span-login');

formLogin?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    email, password, method, role,
  } = event.target;
  const response = await fetch('/auth/login', {
    method,
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      role: role.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (data.message === 'Добро пожаловать') {
    errorSpanLogin.style.color = 'green';
    window.location.assign('/');
  }
  errorSpanLogin.innerText = data.message;

  errorSpan.innerText = data.message;

  console.log('🚀 ~ regForm?.addEventListener ~ data', data);
});
