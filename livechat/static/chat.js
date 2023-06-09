// frontend js
const inputNickname = document.querySelector("#nickname");
const inputMessage = document.querySelector("#message");
// socket 사용을 위해서 객체 생성
let socket = io.connect();

// 나의 nickname
let myNick;
const p = document.querySelector("#form-server");

socket.on("connect", () => {
  console.log("⭕️ Client Socket Connected >> ", socket.id);
});

// [실습 3-1] 채팅창 입장 안내 문구
socket.on("notice", (msg) => {
  document
    .querySelector("#chat-list")
    .insertAdjacentHTML("beforeend", `<div class="notice">${msg}</div>`);
});

// [실습 3-2]
function entry() {
  console.log(inputNickname.value);
  // 공백 입력 막기
  if (inputNickname.value === "") {
    alert("닉네임을 입력해주세요");
  } else if (inputNickname.value[0] === " ") {
    alert("맨 앞에 공백문자는 포함할 수 없습니다.");
    inputNickname.value = "";
  } else {
    socket.emit("setNick", document.querySelector("#nickname").value);
  }
}

socket.on("entrySuccess", (nick) => {
  // 1. 내 닉네임 설정
  myNick = nick;

  // 2. nickname 입력창 & 버튼 비활성화

  document.querySelector(".entry-box").classList.add("d-none");

  // 3. chat-box 보이기
  document.querySelector(".chat-box").classList.remove("d-none");
});

// [실습 3-2] 닉네임 중복 처리 -> alert 띄우기
socket.on("error", (msg) => {
  alert(msg);
});

// [실습 3-2]
// 닉네임 리스트 객체 업데이트하는 이벤트 수신
socket.on("updateNicks", (obj) => {
  let options = `<option value="all">전체</option>`;
  // select#nick-list 요소의 option 추가
  for (let key in obj) {
    // obj[key] : 유저가 input에 입력한 닉네임
    // key : 소켓 아이디
    options += `<option value="${key}">${obj[key]}</option>`;
  }

  // select 요소에 options 덮어쓰기
  document.querySelector("#nick-list").innerHTML = options;
});

// [실습 4] 채팅창 메시지 전송 step 1
// "send" 이벤트 전송 { 닉네임, 입력 메시지 }
function send() {
  // 공백 입력 막기
  if (inputMessage.value === "") {
    alert("내용을 입력해주세요");
  } else if (inputMessage.value[0] === " ") {
    alert("공백은 전송할 수 없습니다.");
    inputMessage.value = "";
  } else {
    const data = {
      myNick: myNick,
      dm: document.querySelector("#nick-list").value,
      // => select에서 선택한 option의 value 값
      msg: inputMessage.value,
    };
    socket.emit("send", data);

    inputMessage.value = ""; // input 초기화
  }
}

function fileUpload() {
  const formData = new FormData();
  const file = document.getElementById("dynamic-file");
  formData.append("dynamic-file", file.files[0]);

  axios({
    method: "POST",
    url: "/dynamicFile",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {});
}

// [실습 4] 채팅창 메시지 전송 step 2
// 서버에 접속한 모든 클라이언트한테 "누가" "뭐라고" 말했는지 이벤트 보내기
socket.on("newMessage", (data) => {
  console.log("socket on newMessage data >> ", data);
  // dm이 아닌 data -> { nick: 'aa', msg: 'xxx' }
  // dm인 data -> { nick: 'aa', dm: '(귓속말)', msg: 'xxx' }

  // #chat-list 요소 선택 (파란색 박스 = 메시지 상자)
  let chatList = document.querySelector("#chat-list");
  // .my-chat or .other-chat 요소 생성
  let div = document.createElement("div");
  // 가장 안쪽 div 요소 생성
  let divChat = document.createElement("div");

  // 새 메시지가 도착했는데, myNick에 저장된 저장된 현재 내 닉네임과
  // data의 닉네임이 같다면, 내 채팅으로 보이게 (오른쪽 배치 == .my-chat)
  // data의 닉네임이 다르다면, 상대방 채팅으로 보이게 (왼쪽 배치 == .other-chat)

  if (myNick === data.nick) {
    div.classList.add("my-chat");
  } else {
    div.classList.add("other-chat");
  }

  // [실습 5] DM 보내기
  if (data.dm) {
    div.classList.add("secret-chat");
    divChat.textContent = data.dm;
  }

  // divChat의 textContent/innerText 값을 적절히 변경
  // ex. nick : msg 형태로 보이게
  // divChat.textContent = `${data.nick} : ${data.msg}`; -> [실습 4]
  divChat.textContent += `${data.nick} : ${data.msg}`;
  // dm : divChat.textContent = '(귓속말)' + 누가 : 메시지
  // not dm : divChat.textContent = '' + 누가 : 메시지

  // divChat을 div 요소에 추가
  div.append(divChat);
  // div를 chatList에 추가
  chatList.append(div);

  // 메시지가 많아져 스크롤이 생기면 하단 고정
  chatList.scrollTop = chatList.scrollHeight;
});
