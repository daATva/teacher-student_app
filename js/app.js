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
