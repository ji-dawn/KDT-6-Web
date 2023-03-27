// 요소 다루기

// 1. 태그 내부 내용 변경
let div1 = document.getElementById("div1");
console.log(div1);
// innerHTML을 사용하면 태그도 사용할 수 있다.
div1.innerHTML = "여기는 <b>첫 번째</b> 태그입니다. &hearts;";
console.log(div1.innerHTML);

// innerText, textContent를 사용하면 태그를 사용할 수 없다.
// innerText는 공백문자를 제거한다.
// textContent는 공백문자를 포함한다.
div1.innerText = "   여기는 <b>첫 번째</b> 태그입니다.      &hearts;";
console.log(div1.innerText);
div1.textContent = "    여기는 <b>첫 번째</b> 태그입니다.     &hearts;";
console.log(div1.textContent);
// div1.innerHTML = "<ul><li>1</li><li>2</li></ul>";

// 2. 태그 속성 변경
let naver = document.getElementById("naver");
naver.setAttribute("href", "https://www.google.com");
console.log(document.getElementById("pooh").getAttribute("src"));

// 직접 접근
console.log(document.getElementById("pooh").src);

naver.href = "#";
console.log(naver.getAttribute("href"));

// css 지정
let h1 = document.querySelector("h1");
let list = document.querySelectorAll("ul > li");
// 1. style 속성 사용
list[0].style.backgroundColor = "red";
for (let li of list) {
  li.style.backgroundColor = "yellow";
  li.style.color = "#444";
  li.style.fontSize = "1.5rem";
}

// 2. classList
console.log(h1.classList);
h1.classList.add("add-h1");
// classList.add("") : 클래스 추가
// classList.remove() : 클래스 제거
// classList.contains("") : 있는지 없는지 확인, true/false
// classList.toggle("") : 해당 클래스가 있으면 제거, 없으면 추가

// 노드 찾기
let friends = document.querySelector("#friends");
let tigger = document.querySelector("#tigger");
console.log(friends);
console.log(tigger);

console.log("--자식 노드 접근--");
console.log(friends.children);
console.log(friends.children[0]);

console.log("--부모 노드 접근--");
console.log(tigger.parentNode);

console.log("--형제 노드 접근--");
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);

// 요소 생성, 추가, 삭제
let container = document.querySelector(".container");

let p = document.createElement("p");
p.innerText = "새로 추가된 p";
p.style.fontWeight = "700";
p.style.backgroundColor = "red";

// 요소.append() : 선택된 요소의 맨 마지막 자식으로 추가
container.append(p);

let p2 = document.createElement("p");
let p3 = document.createElement("p");
p2.innerHTML = "p2";
p3.textContent = "p3";

p2.classList.add("p-2");
p3.classList.add("p-3");

container.append(p2, p3);
// container.appendChild(p2);

// 요소.prepend() : 선택된 요소의 맨 첫 번째 자식으로 추가
let li1 = document.createElement("li");
li1.textContent = "캉가";
friends.prepend(li1);

// before & after
// before : 선택된 요소의 앞에 추가
// after : 선택된 요소의 뒤에 추가
let h3 = document.createElement("h3");
let h2 = document.createElement("h2");
h3.innerText = "h3";
h2.innerText = "h2";
h1.after(h3);
h3.before(h2);

// 요소 삭제
// remove() & removeChild("")
// 요소.remove()  : 선택된 요소 삭제
// 요소.removeChild(자식 요소) : 요소의 자식 요소를 삭제
let firstLi = document.querySelector("li");
console.log(firstLi);
let ul = firstLi.parentNode;
console.log(ul);

// firstLi.remove();
ul.removeChild(firstLi);

// 이미지 태그 만들어서 추가
// container 클래스의 마지막 자식으로 img 태그 추가
let img = document.createElement("img");
img.setAttribute("src", "../image/pooh.png");
img.setAttribute("alt", "pooh 사진");
container.appendChild(img);
