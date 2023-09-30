// Находим элемент <select> по его ID
let topicSelect = document.getElementById('topicSelect');

// Добавляем обработчик события change на элемент <select>
topicSelect.addEventListener('change', function () {
    // Получаем выбранный вариант (значение value выбранного option)
    let selectedValue = topicSelect.value;
    // Выводим выбранное значение и текст в консоль
    console.log(selectedValue);
    if(selectedValue === "Тест по предмету «Математическая логика»"){
      // Сохраняем данные в локальное хранилище
      localStorage.setItem('message', 'привет');
    }
});

// Получаем все элементы <option>
let options = topicSelect.options;
// Добавляем обработчик события click на каждый элемент <option>
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
        // Получаем текст выбранного варианта
        let selectedOptionText = options[i].text;

        // Выводим текст выбранного варианта в консоль
        console.log('Выбранный вариант (по клику):', selectedOptionText);
    });
}

// Создаем объект, который содержит текст и ссылку
const data = {
  text: 'Пример текста',
  link: 'https://www.example.com' ,
  classNames: ['mb-4', 'class2', 'class3']

};

// Преобразуем объект в JSON и сохраняем его в локальном хранилище
localStorage.setItem('myData', JSON.stringify(data));

// Сохраняем данные в локальное хранилище
localStorage.setItem('myData', JSON.stringify(data));

// Получаем данные из локального хранилища и преобразуем JSON обратно в объект
const storedData = JSON.parse(localStorage.getItem('myData'));

// Проверяем, есть ли сохраненные данные
if (storedData) {
  // Создаем элемент для текста
  const textElement = document.createElement('p');

  // Устанавливаем текст на элемент
  textElement.textContent = storedData.text;

  // Добавляем классы к элементу
  storedData.classNames.forEach(className => {
    if (className === 'mb-4') {
      textElement.classList.add(className);
    }
  });
  // Добавляем элемент на страницу
  document.querySelector('.text-center').appendChild(textElement);
  // Создаем ссылку и добавляем к ней атрибут href со значением из свойства link объекта data
const linkElement = document.createElement('a');
linkElement.href = storedData.link;

// Добавляем текст и ссылку в элемент .text-center   vvvvv
}
