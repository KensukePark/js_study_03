import "./styles.css";

const reviews = [
  {
    id: 1,
    name: "철수",
    job: "대학생",
    text: "철수 테스트"
  },
  {
    id: 2,
    name: "영희",
    job: "고등학생",
    text: "영희 테스트"
  },
  {
    id: 3,
    name: "바둑이",
    job: "중학생",
    text: "바둑이 테스트"
  },
  {
    id: 4,
    name: "점박이",
    job: "초등학생",
    text: "점박이 테스트"
  }
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
