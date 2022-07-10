// psuedo code  
// Attempting to create responsive NAV bar with JS. 
// Will query the menu content elements as well as the button by storing them in variables.
// Then using event listener, create a onclick function where certain code will be triggered when the button is pressed. The result should be that the menu will open and close by clicking on that hamburger menu. 

// Step 1: Creating variables. 
const menuButton = document.querySelector(".menuButton");
const menuContent = document.querySelector(".mainMenu");
// step 2: created an eventlistener which triggers on click of the button and will essentially "toggle" between showing the menu and hiding the menu based on the height. 

menuButton.addEventListener("click", function () {
    menuContent.classList.toggle('menuToggle');
})

// pseudo code
// similarly with the nav bar toggle. I will also create a dark mode option for the homepage. To do this. I will have to create a toggle that effectively makes the background black, with the text being white. 
// step 1: creating variables. 
const darkButton = document.querySelector(".darkMode");
const darkBody = document.querySelector("body");
// step 2: create a function that will toggle the effects 
darkButton.addEventListener("click", function () {
    darkBody.classList.toggle(`darkToggle`)
})



