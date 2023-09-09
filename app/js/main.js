$(function () {
  $("#module1").on("click", function () {
    $(".description__subitem").toggleClass("subitem--active");
    $("#module-icon1").toggleClass("link-icon--active");
  });
  $("#module-icon1").on("click", function () {
    $(".description__subitem").toggleClass("subitem--active");
    $("#module-icon1").toggleClass("link-icon--active");
  });
  $("#module2").on("click", function () {
    $("#module-icon2").toggleClass("link-icon--active");
  });
  $("#module-icon2").on("click", function () {
    $("#module-icon2").toggleClass("link-icon--active");
  });
  $("#module3").on("click", function () {
    $("#module-icon3").toggleClass("link-icon--active");
  });
  $("#module-icon3").on("click", function () {
    $("#module-icon3").toggleClass("link-icon--active");
  });
  $("#module4").on("click", function () {
    $("#module-icon4").toggleClass("link-icon--active");
  });
  $("#module-icon4").on("click", function () {
    $("#module-icon4").toggleClass("link-icon--active");
  });

  $(".nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
});
});
