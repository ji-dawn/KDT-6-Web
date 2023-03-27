console.log(window);
console.log(document);

console.log($(window));
console.log($(document));

// mouse event
// click(function() {}), mouseover(function() {})
// hover(function() {마우스 올렸을 때}, function() {마우스 뗐을 때})

// 1. click(function() {})
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// on() == addEventListenr()
$(".num").on("click", function () {
  // 클릭되는 li만 적용됨
  $(this).css("color", "blue");

  // 모든 li에 한번에 적용됨
  // $(".num").css("color", "blue");
});

$(".div-hover").hover(
  function () {
    $(this).addClass(".hover1");
  },
  function () {
    $(this).removeClass(".hover1");
  }
);

$(window).scroll(function () {
  console.log("scroll!");
});

// 선택요소.addEventListenr('keydown', function () {})

$(".input-key").keydown(function (event) {
  console.log(event.code);
  if (event.code === "ArrowUp") {
    console.log("up");
  } else if (event.code === "ArrowRight") {
    console.log("right");
  } else if (event.code === "ArrowLeft") {
    console.log("left");
  } else if (event.code === "ArrowDown") {
    console.log("down");
  }
});

// todo list
$("#todo-form").on("submit", function (e) {
  e.preventDefault();

  const todo = $('input[name="todo"]').val();

  if (todo !== "") {
    $("ul.todos").append(`<li>${todo}</li>`);
    $('input[name="todo"]').val(""); // 초기화
  }
});
