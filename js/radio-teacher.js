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

const noteElement = document.createElement('p');
document.querySelector('.footer__image').appendChild(noteElement);

noteElement.classList.add("text-center");
noteElement.classList.add("mt-22");

const test = `
<p class="text-center mt-22">Тест по предмету «Системы искусственного интеллекта»</p>
<p class="text-center mt-22">Ученик выполнил задания</p>

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

    <div class = "tm-bg-others">savedTextareaValue
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
        <a class="waves-effect btn-large mt-23 " id="upload-button" href="./survey.html">Отправить оценку</a>
    </div>
</div>

`;

const empty = ``

const container = document.querySelector('.task__stage');

const taskElement = document.getElementById('task');

const div = document.createElement('div');

div.innerHTML = test;

container.appendChild(div);

// if(savedRadioButton1 === null){
//     test = empty
// }
    const textarea1 = document.getElementById("textarea1");
    const textarea2 = document.getElementById("textarea2");



task.style.display = "block"
// imgFooter.style.display = "block"

console.log(savedTextareaValue)
}

// document.getElementById('task').classList.add('class-none');
// document.getElementById('footer_id').classList.add('class-none');
const uploadButtons = document.getElementById("upload-buttons");

uploadButtons.addEventListener("click", function() {
  


});

for(var i = 0; i < localStorage.length; i++){
    localStorage.key(i);
  }

const taskElement = document.getElementById('task');
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

// Получаем выбранный файл из localStorage
let base64String = localStorage.getItem("image");

// Создаем элемент img и отображаем выбранный файл
let img = document.createElement("img");
let imgFooter = document.getElementById("footer_id")

img.width = 450;
img.height = 750;

img.classList.add('image-center')
img.src = base64String;
document.body.appendChild(img);

imgFooter.appendChild(img);

// Очищаем localStorage

