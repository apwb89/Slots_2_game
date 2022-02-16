const startCoins = 100;
let slotDepth = 5;





function masterSpin() {
    spin1();
}

function spin1() {
    spin = (Math.floor(Math.random() * slotDepth) + 1).toString();
    document.getElementById('slot1').innerHTML = spin;
    slot1Value = spin;
} 

function showWin() {
    document.getElementById("win").style.visibility = "visible";
  }
  