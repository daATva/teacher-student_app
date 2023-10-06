let savedRadioButton2 = localStorage.getItem('selectedRadioButtongroup2');
let savedRadioButton3 = localStorage.getItem('selectedRadioButtongroup3');
let savedRadioButton4 = localStorage.getItem('selectedRadioButtongroup4');
let savedTextareaValue = localStorage.getItem('textareaValue');
const savedRadioButton1 = localStorage.getItem('selectedRadioButtongroup1');


// Теперь у вас есть доступ к сохраненным значениям, и вы можете использовать их по вашему усмотрению
console.log('Задание 1: ' + savedRadioButton1);
console.log('Задание 2: ' + savedRadioButton2);
console.log('Задание 3: ' + savedRadioButton3);
console.log('Задание 4: ' + savedRadioButton4);
console.log('Задание с текстовым полем: ' + savedTextareaValue);

//  Получаем данные из локального хранилища и преобразуем JSON обратно в объект
const storedData = JSON.parse(localStorage.getItem('myData'));
const savedRadioButtons = JSON.parse(localStorage.getItem('savedRadioButton1'));

// Получаем сохраненное значение из Local Storage
let selectedOptionText = localStorage.getItem('SelectedOptionText');


// Проверяем, есть ли сохраненные данные
if (1>0) {

// Создаем элементы для текста и ссылки
const savedRadioButton1 = document.createElement('p');
// Создаем элементы для текста и ссылки
const textElement = document.createElement('p');
const linkElement = document.createElement('a');

document.querySelector('.text-center').appendChild(textElement);
document.querySelector('.text-center').appendChild(linkElement);

// Устанавливаем текст и ссылку на элементы
textElement.textContent = savedRadioButton4;

let linkStorage = localStorage.getItem('SelectedValue');

linkElement.textContent = linkStorage;

linkElement.href = storedData.link;

console.log(111)

document.querySelector('.mt-5').appendChild(savedRadioButton1);

document.querySelector('.text-center').appendChild(linkElement);


}

document.getElementById("upload-button").onclick = function(){
console.log(888)
}