<<<<<<< HEAD
//Set open and close menu queryselector
let popupButton = document.querySelector(".top-bar-button");
let popupButtonClose = document.querySelector(".popup-menu-close");
let popupMenu = document.querySelector(".popup-menu");

let goUpButton = document.querySelector("#go-up-icon");

//PLEASE GIVE ME A COOKIE
=======
>>>>>>> 04d0c7102f889fb7d9e80047a572945bef95063a
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("searchTrigger");

// When the user clicks the button, open the modal 
function showModal () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}