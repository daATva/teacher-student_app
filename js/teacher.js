// Находим элемент <select> по его ID
let topicSelect = document.getElementById('topicSelect');

// Добавляем обработчик события change на элемент <select>
topicSelect.addEventListener('change', function () {
    // Получаем выбранный вариант (значение value выбранного option)
    let selectedValue = topicSelect.value;
    // Выводим выбранное значение и текст в консоль
    // console.log(selectedValue);
    
    localStorage.setItem('SelectedValue', selectedValue);
    console.log(localStorage.getItem('SelectedValue'));

    if(selectedValue === "Тест по предмету «Математическая логика»"){
      // Сохраняем данные в локальное хранилище
      localStorage.setItem('message', 'привет');
    }
});

// Получаем текст выбранного элемента
let selectedText = selectedOptionText;

