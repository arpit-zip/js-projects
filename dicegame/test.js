let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
score0.textContent = 0;
score1.textContent = 0;

let dice = document.getElementById('.dice');
let rolldice = document.getElementById('.btn--roll');
rolldice = addEventListener('click, function()')
{
    dice.classList.remove('hidden');
    let diceNumber = (Math.random()*6+1);
    dice.src = 'image/dice-${dice.name}.png'
}