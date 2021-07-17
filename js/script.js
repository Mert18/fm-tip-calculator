
const tipButtons = document.querySelectorAll('.tippie');
const bill = document.querySelector('#bill');
const nop = document.querySelector('#nop');

const tipAmount = document.querySelector('#tipa');
const totalAmount = document.querySelector('#total');

const btnReset = document.querySelector("#btn-reset");

const customTip = document.querySelector('#custom');
const error = document.querySelector('#error');

let currentTip = 10
bill.addEventListener('change', () => {calculateTip(bill, currentTip)})
nop.addEventListener('change', () => {calculateTip(bill, currentTip)})
customTip.addEventListener('change', () => customTip.click())

nop.addEventListener('focus', () => {
  if(nop.value > 0){
    error.innerHTML = ""
    nop.style.border = '3px solid var(--strong-cyan)'
  }
  else if(nop.value.type == undefined){
    error.innerHTML = "Can't be zero";
    nop.style.borderColor = "red";
  }else {
    error.innerHTML = ""
  }
});
nop.addEventListener('blur', () => {
  nop.style.border ="transparent"
})
nop.addEventListener('change', () => {
  if(nop.value !== 0){
    error.innerHTML = "";
    nop.style.border = "transparent";
  }
})
for (let i = 0; i < tipButtons.length; i++) {
  tipButtons[i].addEventListener("click", function() {
    const tip = this.value.split('');
    if(tip.slice(-1) == "%"){
      tip.pop()
    }
    currentTip = tip.join('');
    let current = document.querySelector(".active");
    current.classList.remove("active");
    this.classList.add('active');
    if(this.id === "custom"){
      currentTip = this.value
    }
    calculateTip(bill, currentTip);
  });
}

const numberOfPeople = document.querySelector('#nop');


function calculateTip(bill, currentTip){
 
  tipAmount.innerHTML = ((bill.value * currentTip/100) / nop.value).toFixed(2);
  totalAmount.innerHTML = (bill.value * currentTip/100).toFixed(2);
  if(nop.value == 0 || nop.value.type == 'undefined'){
    tipAmount.innerHTML = '0.00'
    totalAmount.innerHTML = '0.00'
  }
}

function reset(){
  bill.value = 0;
  nop.value = 0;
  tipAmount.innerHTML = '0.00';
  totalAmount.innerHTML = '0.00';
}

btnReset.addEventListener('click', () => reset())