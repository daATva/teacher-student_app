// Получаем элемент input по id
let fileInput = document.getElementById("file-input");
// Добавляем обработчик события change
fileInput.addEventListener("change", function() {
  // Получаем выбранный файл
  let file = this.files[0];
  // Проверяем, является ли файл изображением
  if (file && file.type.match("image.*")) {
    // Создаем объект FileReader для чтения файла
    let reader = new FileReader();
    // Добавляем обработчик события load
    reader.addEventListener("load", function() {
      // Сохраняем Data URL в localStorage по ключу image
      localStorage.setItem("image", this.result);
    });
    // Читаем файл как Data URL
    reader.readAsDataURL(file);
  }
});

// Получаем элемент img по id
let imageOutput = document.getElementById("image-output");
// Получаем Data URL изображения из localStorage по ключу image
let dataURL = localStorage.getItem("image");
// Проверяем, есть ли такое значение в localStorage
if (dataURL) {
  // Устанавливаем Data URL в атрибут src тега img
  imageOutput.src = dataURL;
  // Показываем элемент img на странице
  imageOutput.style.display = "block";
}


// Получаем данные из локального хранилища и преобразуем JSON обратно в объект
const storedData = JSON.parse(localStorage.getItem('myData'));


// import { options } from "./teacher";

// Получаем сохраненное значение из Local Storage
let selectedOptionText = localStorage.getItem('SelectedOptionText');

// Выводим значение в консоль
console.log(selectedOptionText);

// Проверяем, есть ли сохраненные данные
if (storedData) {
// Создаем элементы для текста и ссылки
const textElement = document.createElement('p');
const markElement = document.createElement('p');
const linkElement = document.createElement('a');

document.querySelector('.text-center').appendChild(textElement);
document.querySelector('.text-center').appendChild(linkElement);
document.querySelector('.mark__send').appendChild(markElement);

// Устанавливаем текст и ссылку на элементы
textElement.textContent = 'У вас есть невыполненный тест, чтобы пройти нажмите на тему текста';

let markItem = localStorage.getItem('textareaValue2');

let linkStorage = localStorage.getItem('SelectedValue');

markElement.textContent = ` Комментарий который оставил учитель по вашей работе : ${markItem}`


// Название опшена
console.log(linkStorage)
console.log(markItem)

if(markItem === null){
  markElement.textContent = ` `
}

console.log(storedData.link)


linkElement.textContent = linkStorage;


linkElement.href = '#'

linkElement.classList.add('mt-22')

// Добавляем слушатель на ссылку
linkElement.addEventListener('click', function() {
  // Перенаправляем на другую страницу в зависимости от значения linkStorage
  if (linkStorage === 'Тест по предмету «Математическая логика»') {
    window.location.href = 'sisAI.html';
  } else if (linkStorage === 'Тест по предмету «Инновационная экономика и технологическое предпринимательство»') {
    window.location.href = 'innovo.html';
  } else {
    console.log('Неизвестная тема');
  }
});
} else {
// Если данных нет, вы можете вывести сообщение об отсутствии данных
console.log('Нет сохраненных данных');
}
console.log(storedData)

// localStorage.removeItem("SelectedValue");

let uploadButton = document.getElementById("upload-button");
let select = document.getElementById("my-select");

uploadButton.addEventListener("click", function (e) {
  // Отменяем действие по умолчанию (переход по ссылке)
  e.preventDefault();

  // Получаем выбранный файл
  let file = fileInput.files[0];

  // Проверяем, что файл выбран
  if (file) {
    // Создаем объект FileReader для чтения содержимого файла
    let reader = new FileReader();

    // Определяем функцию обратного вызова для чтения файла
    reader.onload = function (event) {
      // Получаем содержимое файла в виде base64-кодированной строки
      let base64String = event.target.result;

      // Создаем элемент img и задаем его свойству src значение base64-кодированной строки
      let img = document.createElement("img");
      img.src = base64String;

      // Создаем элемент option и добавляем в него элемент img
      let option = document.createElement("option");
      option.appendChild(img);

      // Добавляем элемент option в выбранный селектор
      select.appendChild(option);

      
    };

    // Читаем содержимое файла в формате base64
    reader.readAsDataURL(file);
  } else {
    // Показываем сообщение об ошибке
    alert("Пожалуйста, выберите файл изображения");
  }
});

fileInput.accept = "image/jpeg, image/png";
