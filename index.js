let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomNumber1 = `images/dice${randomNumber1}.png`;
randomNumber2 = `images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute("src", randomNumber1);
document.querySelector(".img2").setAttribute("src", randomNumber2);

//if player 1 wins
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wlins!";
} // if player 2 wins
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} //else draw
else {
    document.querySelector("h1").textContent = "Draw!";
}