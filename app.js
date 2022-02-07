const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

var count = 0;

counter.textContent = count;

function handleClickPlusBtn(){
    count++;
    counter.textContent = count;
}

function handleClickMinusBtn(){
    count--;
    counter.textContent = count;
}

plusBtn.addEventListener('click', handleClickPlusBtn);
minusBtn.addEventListener('click', handleClickMinusBtn);