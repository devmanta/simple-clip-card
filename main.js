let container = document.querySelector(".container");
let overlay = document.querySelector(".overlay");

function handleMove(x, y) {
  let rotateY = (-1 / 5) * x + 20;
  let rotateX = (4 / 30) * y - 20;

  overlay.style = `background-position: ${x / 5 + y / 5}%`;
  container.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

container.addEventListener("mousemove", function (e) {
  let x = e.offsetX || e.clientX;
  let y = e.offsetY || e.clientY;
  handleMove(x, y);
});

container.addEventListener("touchmove", function (e) {
  let x = e.touches[0].clientX;
  let y = e.touches[0].clientY;
  handleMove(x, y);
});

let content = ["안녕 수빈아"];
content.push("벌써 2024년 둘째주다");
content.push("너가 만든 카드에 대한 답장이랄까..");
content.push("작년에 내가 어떻게 보냈는지 잘 몰랐구나..");
content.push("올해는 좀 더 알아줄 수 있겠니?ㅎㅎㅎ");
content.push("나는 잘지냈어(?) 너도 23년에 잘 지냈지?");
content.push("이 카드는 잠시 올린거라서 조만간 없앨게");
content.push("너도 카드로 재능기부 해줬는데.. ");
content.push("나는 재능기부까진 아니지만 아주아주 허접하게 만들었어");
content.push("너 카드 한번 만져바 유희왕 카드 처럼 움직여");
content.push("유튜브에 저런거 있길래 그냥 코드 복붙한거야 별건없어");
content.push("그래도 나름 스페셜한 카드인것 같은데 어때?ㅋㅋㅋ");
content.push("24년에 계획은 세웠어? 나는 계획이 없어");
content.push("다 귀차나 어차피 계획 세워도 한개도 못지키더라고ㅎㅎㅎ");
content.push("그래서 그냥 계획 없이 살게~~");
content.push("올해 너의 소원! 계획!은 모두 이뤄지길 바라");
content.push("그럼 우리 새해복 많이 받자!!");
content.push("앞으로도 건강하게 행풋하자 ^.^");
content.push("빠이!!");

let options = {
  strings: content,
  typeSpeed: 100, // 한 글자당 타이핑 속도 (밀리초)
  backSpeed: 30, // 한 글자당 삭제 속도 (밀리초)
};

let typed = new Typed("#typing-text", options);
