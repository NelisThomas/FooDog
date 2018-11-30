//Set open and close menu queryselector
let popupButton = document.querySelector(".top-bar-button");
let popupButtonClose = document.querySelector(".popup-menu-close");
let popupMenu = document.querySelector(".popup-menu");


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

popupButton.addEventListener("click", displayMenu);
popupButtonClose.addEventListener("click", closeMenu);

console.log(`test +`);

/* ========================================================*/ 
/* INSERTING-SOCIAL-SHARE-ICONS*/

const socialMediaShare = document.getElementsByClassName(`social-media-share`);

function displaySocialMediaIcons0() {
    if (socialMediaShare[0].style.display===`none`) {
        socialMediaShare[0].style.display=`flex`
        console.log('aaaa');
    }
    console.log('bbbb');
    socialMediaShare[0].style.display=`flex`;
};
function hideSocialMediaIcons0() {
    if (socialMediaShare[0].style.display===`none`) {
        socialMediaShare[0].style.display=`flex`
        console.log('aaaa');
    }
    console.log('bbbb');
    socialMediaShare[0].style.display=`none`;
};
function displaySocialMediaIcons1() {
    if (socialMediaShare[1].style.display===`none`) {
        socialMediaShare[1].style.display=`flex`
        console.log('aaaa');
    }
    console.log('bbbb');
    socialMediaShare[1].style.display=`flex`;
};
function hideSocialMediaIcons1() {
    if (socialMediaShare[1].style.display===`none`) {
        socialMediaShare[1].style.display=`flex`
        console.log('aaaa');
    }
    console.log('bbbb');
    socialMediaShare[1].style.display=`none`;
};
function displaySocialMediaIcons2() {
    if (socialMediaShare[2].style.display===`none`) {
        socialMediaShare[2].style.display=`flex`
        console.log('aaaa');
    }
    console.log('bbbb');
    socialMediaShare[2].style.display=`flex`;
};

function hideSocialMediaIcons2() {
    if (socialMediaShare[2].style.display===`none`) {
        socialMediaShare[2].style.display=`flex`
        console.log('aaaa');
    }
    console.log('bbbb');
    socialMediaShare[2].style.display=`none`;
};

document.getElementsByClassName('article-dog-share-img')[0].addEventListener("mouseover", (event)=>displaySocialMediaIcons0());
document.getElementsByClassName('article-dog-share-img')[1].addEventListener("mouseover", (event)=>displaySocialMediaIcons1());
document.getElementsByClassName('article-dog-share-img')[2].addEventListener("mouseover", (event)=>displaySocialMediaIcons2());

document.getElementsByClassName('article-dog-share-img')[0].addEventListener("mouseout", (event)=>hideSocialMediaIcons0());
document.getElementsByClassName('article-dog-share-img')[1].addEventListener("mouseout", (event)=>hideSocialMediaIcons1());
document.getElementsByClassName('article-dog-share-img')[2].addEventListener("mouseout", (event)=>hideSocialMediaIcons2());

// class="article-dog-share-share"

document.getElementsByClassName("article-dog-share-share")[0].addEventListener("mouseover", (event)=>displaySocialMediaIcons0());
document.getElementsByClassName("article-dog-share-share")[1].addEventListener("mouseover", (event)=>displaySocialMediaIcons1());
document.getElementsByClassName("article-dog-share-share")[2].addEventListener("mouseover", (event)=>displaySocialMediaIcons2());

document.getElementsByClassName("article-dog-share-share")[0].addEventListener("mouseout", (event)=>hideSocialMediaIcons0());
document.getElementsByClassName("article-dog-share-share")[1].addEventListener("mouseout", (event)=>hideSocialMediaIcons1());
document.getElementsByClassName("article-dog-share-share")[2].addEventListener("mouseout", (event)=>hideSocialMediaIcons2());