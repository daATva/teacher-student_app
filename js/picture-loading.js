let fileInput = document.getElementById("file-input");

let imageInput = document.getElementById("image-input");

let imageOutput = document.getElementById("image-output");

let uploadButton = document.getElementById("upload-button");

// Добавляем обработчик события change для input элемента
fileInput.addEventListener("change", function () {
  // Проверяем, есть ли выбранный файл
  if (this.files && this.files[0]) {
    // Создаем объект FileReader для чтения файла
    let reader = new FileReader();

    // Добавляем обработчик события load для reader
    reader.addEventListener("load", function (e) {
      // Получаем Data URL изображения
      let dataURL = e.target.result;
      // Сохраняем Data URl в localStorage под ключом image
      localStorage.setItem("image", dataURL);
      // Создаем объект Image для отрисовки изображения
      let image = new Image();

      // Добавляем обработчик события load для image
      image.addEventListener("load", function () {
        // Задаем желаемый размер изображения
        let width = 720;
        let height = 1280;

        // Создаем объект Canvas для изменения размера изображения
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        // Получаем контекст Canvas для рисования
        let context = canvas.getContext("2d");

        // Рисуем изображение на Canvas с нужным размером
        context.drawImage(image, 0, 0, width, height);

        // Получаем новый Data URL из Canvas
        let newDataURL = canvas.toDataURL();

        // Устанавливаем новый Data URL в атрибут src тега img
        imageOutput.src = newDataURL;

        imageOutput.style.display = "block";

        // Сохраняем новый Data URl в localStorage под ключом image
        localStorage.setItem("image", newDataURL);
      });

      // Устанавливаем Data URL в атрибут src тега img
      imageInput.src = dataURL;
    });

    // Читаем файл как Data URL
    reader.readAsDataURL(this.files[0]);
  }
});

uploadButton.addEventListener("click", function (e) {
  // Проверяем, есть ли картинка в localStorage
  if (localStorage.getItem("image")) {
    // Перенаправляем на другую страницу
    window.location.href = "./survey.html";
    // Не удаляем изображение из localStorage
    // localStorage.removeItem("image");
  } else {
    // Отменяем действие по умолчанию (переход по ссылке)
    e.preventDefault();
    // Показываем сообщение об ошибке
    alert("Пожалуйста, выберите файл изображения");
  }
});
