let randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber1 = `images/dice${randomNumber1}.png`;
document.querySelector(".img1").setAttribute("src", randomNumber1);