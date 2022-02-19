const startCoins = 100;
let slot1Value;
let slot2Value;
let slot3Value;
let coins = startCoins;
let slotDepth = 5;
let currentLevel = 1;


function updateCoinCount(){
    document.getElementById('coinDisplay').innerHTML = 'Coins: ' + coins;
}

function masterSpin() {
    coins -= 5;
    spin1();
    spin2();
    spin3();
    checkWinLevel3();
    updateCoinCount();
}

function checkWinLevel3() {
    if(slot1Value === slot2Value && slot1Value === slot3Value) {
        payout();
    }
}

function checkWinLevel1(spinValue) {
    if (spinValue === 5) {
        coins += 5;
}
}

function spin1() {
    spin = (Math.floor(Math.random() * slotDepth) + 1).toString();
    document.getElementById('slot1').innerHTML = spin;
    slot1Value = spin;
    checkWinLevel1(spin);
} 

function spin2() {
    spin = (Math.floor(Math.random() * slotDepth) + 1).toString();
    document.getElementById('slot2').innerHTML = spin;
    slot2Value = spin;
    checkWinLevel1(spin);
} 

function spin3() {
    spin = (Math.floor(Math.random() * slotDepth) + 1).toString();
    document.getElementById('slot3').innerHTML = spin;
    slot3Value = spin;
    checkWinLevel1(spin);
} 

function showWin() {
    document.getElementById("win").style.visibility = "visible";
  }
  
  function payout() {
      coins += (slot1Value * 25);
  }