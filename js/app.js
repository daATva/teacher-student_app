// Получаем элемент div, который является кнопкой
let continueButton = document.querySelector('.waves-effect.btn-large');
// Добавляем обработчик события click для кнопки
continueButton.addEventListener('click', function() {
  // Получаем значение выбранной радио-кнопки
  let role = document.querySelector('[name="group1"]:checked').value;
  // Проверяем, какая роль выбрана
  if (role === '1') {
    // Если роль ученик, перейти на страницу student.html
    window.location.href = './student.html';
  } else if (role === '20') {
    // Если роль учитель, проверить пароль
    let checkRole = prompt('Введите пароль: ');
    if (checkRole === '') {
      // Если пароль верный, перейти на страницу teacher.html
      
      window.location.href = './teacher.html';
      
    } else {
      // Если пароль неверный, показать сообщение об ошибке
      alert('Пароль неверный');
    }
  }
});

// Получаем ссылки на радио-кнопки и кнопку "Продолжить"
const radioButton1 = document.getElementById('19');
const radioButton2 = document.getElementById('20');
const submitButton = document.querySelector('.waves-effect.btn-large');

// Обработчик события для кнопки "Продолжить"
submitButton.addEventListener('click', function() {
  let value;

  // Проверяем, какая радио-кнопка была выбрана
  if (radioButton1.checked) {
    value = radioButton1.value;
  } else if (radioButton2.checked) {
    value = radioButton2.value;
  }

  // Записываем значение в Local Storage
  localStorage.setItem('selectedRadioButton', value);
  
});