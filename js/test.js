// Получаем все радио-кнопки и текстовое поле
var radioButtonsGroup1 = document.getElementsByName('group1');
var radioButtonsGroup2 = document.getElementsByName('group2');
// Очистить textarea
var textarea = document.querySelector('textarea');
textarea.value = '';

// Удалить сохранённое значение из localStorage
localStorage.removeItem('savedTextareaValue');


// Получаем значение textarea
var textareaValue = document.getElementById('textarea-id').value;

// Сохраняем значение в localStorage
localStorage.setItem('savedTextareaValue', textareaValue);

// Извлекаем значение из localStorage
var savedTextareaValue = localStorage.getItem('savedTextareaValue');

// Устанавливаем значение textarea
document.getElementById('textarea-id').value = savedTextareaValue;



// Добавляем обработчик события "change" для радио-кнопок
radioButtonsGroup1.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        // Сохраняем выбранное значение радио-кнопки в local storage
        localStorage.setItem('selectedRadioButton1', radioButton.value);
    });
});

radioButtonsGroup2.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        // Сохраняем выбранное значение радио-кнопки в local storage
        localStorage.setItem('selectedRadioButton2', radioButton.value);
    });
});

// Добавляем обработчик события "input" для текстового поля
textarea.addEventListener('input', function() {
    // Сохраняем текстовое значение в local storage
    localStorage.setItem('textareaValue', textarea.value);
});




// if (savedTextareaValue !== null) {
//     console.log('Текстовое значение: ' + savedTextareaValue);
// } else {
//     console.log('На задание не дали ответ');
// }

// Функция, которая обрабатывает изменение радиокнопок и сохраняет их в localStorage
function handleRadioChange(event) {
    // Получаем название выбранной радиокнопки
    var selectedValue = event.target.nextElementSibling.textContent;

    // Сохраняем выбранное значение в localStorage
    localStorage.setItem('selectedRadioButton' + event.target.name, selectedValue);

    console.log(selectedValue);
}

// Получаем радиокнопки и добавляем к ним обработчик
var rates1 = document.getElementsByName('group1');
var rates2 = document.getElementsByName('group2');
var rates3 = document.getElementsByName('group3');
var rates4 = document.getElementsByName('group4');

var savedTextareaValue = localStorage.getItem('textareaValue');

// Устанавливаем значение textarea
if (savedTextareaValue) {
    textarea.value = savedTextareaValue;
}

for (var i = 0; i < rates1.length; i++) {
    rates1[i].addEventListener('change', handleRadioChange);
}

for (var i = 0; i < rates2.length; i++) {
    rates2[i].addEventListener('change', handleRadioChange);
}

for (var i = 0; i < rates3.length; i++) {
    rates3[i].addEventListener('change', handleRadioChange);
}

for (var i = 0; i < rates4.length; i++) {
    rates4[i].addEventListener('change', handleRadioChange);
}





