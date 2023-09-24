// Получаем ссылку на элемент <select>
let select = document.getElementById("test");

// Добавляем обработчик события "change", который срабатывает при выборе опции
select.addEventListener("change", function() {
  // Получаем значение выбранной опции
  let value = select.value;
  console.log(555)
  // В зависимости от значения перенаправляем на разные страницы с тестами
  if (value === "logic") {
    // Отправляем на страницу с тестом по математической логике
    window.location.href = "./sisAI.html";
  } else if (value === "economy") {
    // Отправляем на страницу с тестом по инновационной экономике и технологическому предпринимательству
    window.location.href = "./economy.html";
  } else if (value === "ai") {
    // Отправляем на страницу с тестом по системам искусственного интеллекта
    window.location.href = "./ai.html";
  } else if (value === "none") {
    // Ничего не делаем, если тест отсутствует
    return;
  }
});
