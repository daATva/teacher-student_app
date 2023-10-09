let savedRadioButton1 = localStorage.getItem('selectedRadioButtongroup1');
let savedRadioButton2 = localStorage.getItem('selectedRadioButtongroup2');
let savedRadioButton3 = localStorage.getItem('selectedRadioButtongroup3');
let savedRadioButton4 = localStorage.getItem('selectedRadioButtongroup4');
let savedTextareaValue = localStorage.getItem('textareaValue');

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
if (storedData) {
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
<p class="mt-5  mt-7 text-center">Ученик выполнил задания</p>
<p class="text-center mt-22">Тест по предмету «Системы искусственного интеллекта»</p>

<div class = "tm-bg-other" >

    <div class = "tm-bg-others">
        <p class="mt-21">Задание 1
        <p> Кто написал книгу «Персепторны»?</p></p>
        <p>Ответ: ${savedRadioButton1}</p></p>
    </div>
    
    <div class = "tm-bg-others">
        <p class="mt-21">Задание 2 
        <p>Кто создал первую модель искусственных нейронных сетей?</p></p>
        <p>Ответ: ${savedRadioButton2}</p></p>
    </div>

    <div class = "tm-bg-others">
        <p class="mt-21">Задание 3 
        <p>Кто разработал первый нейрокомпьютер?</p></p>
        <p>Ответ: ${savedTextareaValue}</p></p>
    </div>

    <div class = "tm-bg-others">
        <p class="mt-21">Задание 4 
        <p>На каких знаниях основываются системы?</p></p>
        <p>Ответ: ${savedRadioButton3}</p></p>
    </div>

    <div class = "tm-bg-others">
        <p class="mt-21">Задание 5 
        <p>Если система использует генетические вычисления и базы данных, она относится к каким интеллектуальным системам?</p></p>
        <p>Ответ: ${savedRadioButton4}</p></p>
    </div>
    
</div>
<div class="tm-mark-block">
    <p class="mb-4 .mb-9 mb-1">Оцените работу</p>
    <ul class="ml-3 textarea__body">
    <textarea id="textarea2" placeholder="Оставьте комментарий о работе здесь"></textarea>
    </ul>
    <div class="text-center mt-5 ">
        <a class="waves-effect btn-large mt-23 " id="upload-button" href="./survey.html">Загрузить задание</a>
    </div>
</div>

`;

const empty = ``

const container = document.querySelector('.task__stage');

const div = document.createElement('div');

div.innerHTML = test;

container.appendChild(div);

if(savedTextareaValue === null){
    div.innerHTML = empty
}
// document.querySelector('.text-center').appendChild(linkElement);


}

// const uploadButton = document.getElementById("upload-button");

// uploadButton.addEventListener("click", function() {
//   task.style.display = "none";
//   console.log(888);
// });


let textarea2 = document.querySelector('#textarea2');

// Восстанавливаем сохраненное значение из Local Storage для textarea2
let savedTextareaValue2 = localStorage.getItem('textareaValue2');
if (savedTextareaValue2) {
  textarea2.value = savedTextareaValue2;
}

// Добавляем обработчик события "input" для textarea2
textarea2.addEventListener('input', function() {
  // Сохраняем текстовое значение в Local Storage для textarea2
  localStorage.setItem('textareaValue2', textarea2.value);
});

console.log(textarea2.value);

