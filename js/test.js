// Получаем все радио-кнопки и текстовое поле
var radioButtonsGroup1 = document.getElementsByName('group1');
var radioButtonsGroup2 = document.getElementsByName('group2');
var textarea = document.querySelector('textarea');

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



var savedTextareaValue = localStorage.getItem('textareaValue');

// Устанавливаем значение textarea
if (savedTextareaValue) {
    textarea.value = savedTextareaValue;
}

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

// localStorage.removeItem('selectedRadioButton1');
// localStorage.removeItem('selectedRadioButton2');
// localStorage.removeItem('selectedRadioButton3');
// localStorage.removeItem('selectedRadioButton4');
// localStorage.removeItem('textareaValue');


// Получаем сохраненные значения из localStorage
var savedRadioButton1 = localStorage.getItem('selectedRadioButtongroup1');
var savedRadioButton2 = localStorage.getItem('selectedRadioButtongroup2');
var savedRadioButton3 = localStorage.getItem('selectedRadioButtongroup3');
var savedRadioButton4 = localStorage.getItem('selectedRadioButtongroup4');
var savedTextareaValue = localStorage.getItem('textareaValue');

// Теперь у вас есть доступ к сохраненным значениям, и вы можете использовать их по вашему усмотрению
console.log('Значение для радиокнопки 1: ' + savedRadioButton1);
console.log('Значение для радиокнопки 2: ' + savedRadioButton2);
console.log('Значение для радиокнопки 3: ' + savedRadioButton3);
console.log('Значение для радиокнопки 4: ' + savedRadioButton4);
console.log('Значение для текстового поля: ' + savedTextareaValue);
