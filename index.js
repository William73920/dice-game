var randomNumber=Math.floor(Math.random(6)*6)+1;

document.querySelectorAll('img')[0].setAttribute('src',"images/dice"+randomNumber+'.png');
randomNumber1=Math.floor(Math.random(6)*6)+1;
document.querySelectorAll('img')[1].setAttribute('src',"images/dice"+randomNumber1+'.png');
if(randomNumber>randomNumber1){
  document.querySelector("h1").textContent='🔥Player 1 Wins';
}
else if(randomNumber<randomNumber1){
  document.querySelector("h1").textContent='Player 2 Wins🔥';
}
else{
  document.querySelector("h1").textContent='🔥Draw🔥';
}
