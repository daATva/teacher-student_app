let uploadButton = document.getElementById("upload-button");
let fileInput = document.getElementById("file-input");
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
