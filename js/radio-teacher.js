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
const textElement = document.createElement('p');
const linkElement = document.createElement('a');


// document.querySelector('.text-center').appendChild(textElement);
document.querySelector('.text-center').appendChild(linkElement);

textElement.textContent = 'У вас есть невыполненный тест, чтобы пройти нажмите на тему текста';

// Устанавливаем текст и ссылку на элементы
textElement.textContent = savedRadioButton4;
textElement.textContent = savedRadioButton1;
textElement.textContent = savedRadioButton4;


const test = `
<p class="mt-5 text-center">Ученик выполнил задания</p>
<p class="mt-5 text-center">Тест по предмету «Системы искусственного интеллекта»</p>
<p class="mt-21">Задание 1
<p> Кто написал книгу «Персепторны»?</p></p>
${savedRadioButton1}
<p class="mt-21">Задание 2 
<p>Кто создал первую модель искусственных нейронных сетей?</p></p>
<p class="mt-21">Задание 3 
<p>Кто разработал первый нейрокомпьютер?</p></p>
<p class="mt-21">Задание 4 
<p>На каких знаниях основываются системы?</p></p>
`;

const container = document.querySelector('.task__stage');

const div = document.createElement('div');
div.innerHTML = test;
container.appendChild(div);

// document.querySelector('.text-center').appendChild(linkElement);


}

document.getElementById("upload-button").onclick = function(){
console.log(888)
}


let task = document.getElementById('file-input')

