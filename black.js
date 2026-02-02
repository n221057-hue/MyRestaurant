let player = {
    name:"sowmya",
    chips:200,
    /*sayhello:function(){
        console.log("QTEA");
    }*/
}
//player.sayhello();

let Cards = [];
let Sum = 0;
let hasblackjack = false;
let isalive = false;
let message=""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector("#sum-el");
//let sumEl = document.querySelector(".sum-el");
//let sumEl = document.querySelector("body");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
console.log(cardsEl);
console.log(sumEl);
console.log(messageEl);
console.log(playerEl);
//console.log(Cards);
function getRandomCard() {
    let random=  Math.floor(Math.random()*13) * 1;
    if(random>10) {
        return 10;

    } else if(random === 1) {
        return 11;
    } else{
        return random;
    }
    }
function startGame() {
    isalive = true;
let firstcard = getRandomCard();
let  secondcard = getRandomCard();
Cards=[firstcard ,secondcard];//array -ordered list of items
Sum = firstcard+  secondcard;
    renderGame();
}
function renderGame() {  
cardsEl.textContent ="Cards:" //+ Cards[0] + " " + Cards[1];
for(let i=0;i<Cards.length;i++){
    cardsEl.textContent +=Cards[i] + " ";    
}
sumEl.textContent ="Sum:" + Sum;

if(Sum<=20){
    message="do u want a new card";
} else if(Sum === 21){
    message="you have got a blackjack";
    hasblackjack = true;
} else {
    message="you are out of the game";
    isalive = false;
}
//console.log(message);
messageEl.textContent = message;
}

function newCard() {
   //console.log("drawing a new card from the deck");
   if(isalive===true && hasblackjack===false){
    let Card = getRandomCard();
   
    Sum += Card;
    Cards.push(Card);
   // console.log(Cards);
    renderGame();
}
}



