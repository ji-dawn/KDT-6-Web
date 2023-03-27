let btn1 = document.querySelector(".btn--black");
let btn2 = document.querySelector(".btn--green");
let btn3 = document.querySelector(".btn--blue");
let btn4 = document.querySelector(".btn--red");
console.log(btn1, btn2, btn3, btn4);

// btn1.addEventListener("동작이름", function () {});
// btn1.addEventListener("동작이름", () => {});

btn1.addEventListener("click", function () {
  alert("버튼1을 클릭했습니다.");
});

btn1.addEventListener("mouseover", function () {
  this.style.backgroundColor = "aqua";
});

btn1.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#444444";
});

let container = document.getElementById("container");
console.log(container);

btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "hi";
  container.append(div);
});

// 즉시 호출되게 changeColor의 ()를 제거해야 한다
btn3.addEventListener("click", changeColor);

function changeColor() {
  // container의 자식 div
  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "magenta";
  }
  divs[divs.length - 1].style.backgroundColor = "yellow";
}

btn4.addEventListener("click", chagneBtnColor);
function chagneBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}

// 스크롤이 특정 위치에 도달했을 때 버튼 보이기
window.addEventListener("scroll", function (event) {
  console.log(event);
  console.log(scrollY);

  let pos = document.querySelector(".pos");
  if (scrollY > 700) {
    pos.style.opacity = 100;
  }
});

const btn = this.document.querySelector("button");
const input = this.document.querySelector("input");

btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (e) {
  console.log(e.code); // KeyE. 좀 더 자세한
  console.log(e.key); // e

  if (e.code === "ArrowUp") {
    console.log("위쪽 방향키를 눌렀습니다.");
  } else if (e.code === "ArrowDown") {
    console.log("아래쪽 방향키를 눌렀습니다.");
  } else if (e.code === "ArrowLeft") {
    console.log("왼쪽 방향키를 눌렀습니다.");
  } else if (e.code == "ArrowRight") {
    console.log("오른쪽 방향키를 눌렀습니다.");
  }
});

const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");

// form 태그는 'submit' 동작이 가능하다
todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  // submit 되는 것을 막는 함수
  // event 전달을 막는다.
  e.preventDefault();

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput);
  console.log(todoInput.value);

  // input의 문자열 저장
  // const todo = todoInput.value;
  // const newTodo = document.createElement("li"); // <li></li>
  // newTodo.append(todo); // <li>todo</li>
  // todos.append(newTodo);

  // 빈 값 입력 방지
  const todo = todoInput.value.trim("");

  if (todo !== "") {
    const newTodo = document.createElement("li"); // <li></li>
    newTodo.append(todo); // <li>todo</li>
    todos.append(newTodo);
  }
  // 입력창 초기화
  todoInput.value = "";
});

const chgInput = document.querySelector("#change-input");
chgInput.addEventListener("change", function () {
  console.log("change");
});
// 실시간 출력
chgInput.addEventListener("input", function () {
  console.log("input");
  let div = document.querySelector(".intro");
  div.innerHTML = chgInput.value;
});
