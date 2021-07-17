
const tipButtons = document.querySelectorAll('.tippie');
const bill = document.querySelector('#bill');
const nop = document.querySelector('#nop');

const tipAmount = document.querySelector('#tipa');
const totalAmount = document.querySelector('#total');

const btnReset = document.querySelector("#btn-reset");

const customTip = document.querySelector('#custom');

let currentTip = 10
bill.addEventListener('change', () => {calculateTip(bill, currentTip)})
nop.addEventListener('change', () => {calculateTip(bill, currentTip)})

customTip.addEventListener('change', () => {calculateTip(bill, customTip.value)})
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
    calculateTip(bill, currentTip);
  });
}

const numberOfPeople = document.querySelector('#nop');


function calculateTip(bill, currentTip){
 
  tipAmount.innerHTML = ((bill.value * currentTip/100) / nop.value).toFixed(2);
  totalAmount.innerHTML = (bill.value * currentTip/100).toFixed(2);
  if(nop.value === 0){
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