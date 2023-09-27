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

// Проверяем, есть ли сохраненные данные
if (storedData) {
  // Создаем элементы для текста и ссылки
  const textElement = document.createElement('p');
  const linkElement = document.createElement('a');

  // Устанавливаем текст и ссылку на элементы
  textElement.textContent = storedData.text;
  linkElement.textContent = 'Перейти по ссылке';
  linkElement.href = storedData.link;

  // Добавляем элементы на страницу
  document.body.appendChild(textElement);
  document.body.appendChild(linkElement);
} else {
  // Если данных нет, вы можете вывести сообщение об отсутствии данных
  console.log('Нет сохраненных данных');
}
