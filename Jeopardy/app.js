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
const blackOut = document.querySelectorAll(".box");

blackOut.forEach((box) => {
    box.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('black');
    });
});


let datamap = new Map([
    [document.getElementById("openModal"), document.getElementById("modal")],
    [document.getElementById("openMoneyModal"), document.getElementById("modalTwo")],
]);

datamap.forEach((value, key) => {
    doModal(key, value);
    console.log(value, key)
});

function doModal(anchor, popupbox) {

    // Get the <span> element that closes the modal
    let close = popupbox.getElementsByClassName("close")[0];

    anchor.addEventListener("click", function (event) {
        popupbox.style.display = "block";
    });

    close.addEventListener("click", function (event) {
        popupbox.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popupbox) {
            popupbox.style.display = "none";
        }
    });
}
//https://stackoverflow.com/a/66301243
//Used this solution and im getting an error but it still works


// let openBtn = document.querySelector('#openModal');
// let openBtn = document.querySelector('#openMoneyModal');
//maybe try a if loop
//working on adding these adding modals and how to not use so much
// let modal = {
//     a: document.querySelector('#modal'),
//     b: document.querySelector("#modalTwo")
// }


// const openModal = {
//     a: modal.a.style.display = 'block',
//     b: modal.b.style.display = 'block',
// };

// const closeBtn = document.querySelector('#close');

// const closeModal = () => {
//     modal.a.style.display = 'none'
//     modal.b.style.display = 'none'
// };

// math100.id.addEventListener('click', openModal.a);

// math200.id.addEventListener('click', openModal.b);

// closeBtn.addEventListener('click', closeModal);


// document.querySelectorAll('.box').forEach((box) => {

//     box.addEventListener('click', (event) => {
//         event.currentTarget.classList.toggle('card-back');
//         playHand(event);
//     });

// });

//I will use this to show the code i was going with but decided the change

// for (let i = 0; i < blackOut.length; i++) {
//     blackOut[i].addEventListener('click', (box) => {
//         box.currentTarget.style.backgroundColor = 'black'
//     });
// }
//https://www.thiscodeworks.com/add-event-listener-to-multiple-buttons-with-the-same-class-javascript/5efa75c76c23bc0014be6336
//used this to help me figure out how to add a click event to all boxes