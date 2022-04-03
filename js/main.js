const data = [
  {
    text : "자바스크립트 공부하기"
  },
  {
    text : "week3 과제 초안 짜기"
  }
];

const data1 = [
  {
    text : "고먐미 쓰다듬기 🐈"
  },
  {
    text : "마켓비 가구 조립하기 🛠"
  },
  {
    text : "폼롤러 마사지 하기 🧘‍♀️"
  },
]
const appElement = document.querySelector(".app");

new TodoList({
  target : appElement,
  initialState : data
});

new TodoList({
  target : appElement,
  initialState : data1
});