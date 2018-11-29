//Set open and close menu queryselector
let popupButton = document.querySelector(".top-bar-button");
let popupButtonClose = document.querySelector(".popup-menu-close");
let popupMenu = document.querySelector(".popup-menu");

let goUpButton = document.querySelector("#go-up-icon");


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("searchTrigger");
// When the user clicks the button, open the modal 

// btn.addEventListener("click", showModal);
// function showModal () {
//     modal.style.display = "block";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
//}


// Fonctionallity open and close side menu

popupMenu.style.display = 'none';
let menuButton = false;
let menuButtonClose = false;

let displayMenu = () => {
    if (menuButton === false) {
        popupMenu.style.display = 'flex';
        popupMenu.style.zIndex = '10';
    }
}
let closeMenu = () => {
    if (menuButtonClose === false) {
        popupMenu.style.display = 'none';
        popupMenu.style.zIndex = '-1';
    } 
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goUpButton.style.display = "block";
    } else {
        goUpButton.style.display = "none";
        
    }
}

// When the user clicks on the button, scroll to the top of the document
function toTopPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

popupButton.addEventListener("click", displayMenu);
popupButtonClose.addEventListener("click", closeMenu);

goUpButton.addEventListener("click", toTopPage);

