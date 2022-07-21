var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var title = document.querySelector("h1");
var num1;
var num2;
var randomNum;
getRandomDice();

function getRandomDice() {
  num1 = getRandomImage();
  num2 = getRandomImage();
  changeTitle(num1, num2);
  image1.setAttribute("src", `images/dice${num1}.png`);
  image2.setAttribute("src", `images/dice${num2}.png`);
}

function changeTitle(p1, p2) {
  if (p1 > p2) {
    title.innerHTML = "&#128681 Player 1";
  } else if (p1 < p2) {
    title.innerHTML = "Player 2 &#128681";
  } else {
    title.innerHTML = "Draw";
  }
}

function getRandomImage() {
  randomNum = Math.floor(6 * Math.random() + 1);
  return randomNum;
}
