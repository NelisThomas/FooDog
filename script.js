//Set open and close menu queryselector
let popupButton = document.querySelector(".top-bar-button");
let popupButtonClose = document.querySelector(".popup-menu-close");
let popupMenu = document.querySelector(".popup-menu");
const shareCollection = document.getElementsByClassName(`article-dog-share`);
const socialMediaShare = document.getElementsByClassName(`social-media-share`);
const socialIMG0 = shareCollection[0].getElementsByClassName('article-dog-share-img');


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

function displaySocialMediaIcons() {
    if (socialMediaShare[0].style.display===`none`) {
        socialMediaShare[0].style.display=`flex`
    }
};



popupButton.addEventListener("click", displayMenu);
popupButtonClose.addEventListener("click", closeMenu);

console.log(`test +`);
socialIMG0.addEventListener("click", (event)=>displaySocialMediaIcons());


/* ========================================================*/ 
/* INSERTING-SOCIAL-SHARE-ICONS*/

