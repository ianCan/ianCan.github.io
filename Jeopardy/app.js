/*
Create divs to hold values
Makes divs turn black when clicked
Use cell-index-of to figure out how to track each box
Make modals for each box
Add buttons to each box with answers
Make a way for it to tell if a queston was right
Make a win condition and a lose condition
Display if you own or lost
*/
const gameStatus = document.querySelector('.status');

let gameActive = true;

const winningMessage = () => 'Congrats you WONN!';
const losingMessage = () => 'Game Over. Better luck next time';

const answers = () => {

};

let datamap = new Map([
    [document.getElementById("money100"), document.getElementById("moneyModal100")],
    [document.getElementById("math100"), document.getElementById("mathModal100")],
    [document.getElementById("anime100"), document.getElementById("animeModal100")],
    [document.getElementById("food100"), document.getElementById("foodModal100")],
    [document.getElementById("money200"), document.getElementById("moneyModal200")],
    [document.getElementById("math200"), document.getElementById("mathModal200")],
    [document.getElementById("anime200"), document.getElementById("animeModal200")],
    [document.getElementById("food200"), document.getElementById("foodModal200")],
    [document.getElementById("money300"), document.getElementById("moneyModal300")],
    [document.getElementById("math300"), document.getElementById("mathModal300")],
    [document.getElementById("anime300"), document.getElementById("animeModal300")],
    [document.getElementById("food300"), document.getElementById("foodModal300")],
    [document.getElementById("money400"), document.getElementById("moneyModal400")],
    [document.getElementById("math400"), document.getElementById("mathModal400")],
    [document.getElementById("anime400"), document.getElementById("animeModal400")],
    [document.getElementById("food400"), document.getElementById("foodModal400")],
    [document.getElementById("money500"), document.getElementById("moneyModal500")],
    [document.getElementById("math500"), document.getElementById("mathModal500")],
    [document.getElementById("anime500"), document.getElementById("animeModal500")],
    [document.getElementById("food500"), document.getElementById("foodModal500")],
]);

datamap.forEach((value, key) => {
    doModal(key, value);

});

function doModal(anchor, modal) {

    let close = modal.getElementsByClassName("close")[0];

    anchor.addEventListener("click", function (event) {
        modal.style.display = "block";
    });

    close.addEventListener("click", function (event) {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};
//https://stackoverflow.com/a/66301243
//Used this solution and im getting an error but it still works

const blackOut = document.querySelectorAll(".box");

blackOut.forEach((box) => {
    box.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('black');
    });
});