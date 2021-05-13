Link to deployed app https://iancan.github.io/

Win = all boxes black and answers right
Lose = answer question wrong
Game will reset if if you get a question wrong after 3 seconds

I used a function to make the boxes black by making a function that makes gives each div clicked and class of black. 
In the CSS I made it so that if something has the class of black it is given a backgroundColor of black

The roughest part was getting each modal to pop up. I could get different modals to pop up at one- 
point but it would've been alot of copying the same function and chnaging the name of each one 20 times.
So i ended up writing a function that used an array of all my divIds that needded to be clicked as well as their-
corresponding modalIds.
