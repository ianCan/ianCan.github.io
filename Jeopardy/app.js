console.log('YOOOOOOOOOo')
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


for (let i = 0; i < blackOut.length; i++) {
    blackOut[i].addEventListener('click', (box) => {
        box.currentTarget.style.backgroundColor = 'black'
    });
}
//https://www.thiscodeworks.com/add-event-listener-to-multiple-buttons-with-the-same-class-javascript/5efa75c76c23bc0014be6336
//used this to help me figure out how to add a click event to all boxes


const openBtn = document.querySelector('#openModal');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#close')

const openModal = () => {
    modal.style.display = 'block';
}
const closeModal = () => {
    modal.style.display = 'none'
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)
setTimeout(openModal, 5000)