const $body = document.querySelector('body');
let url = new URLSearchParams(window.location.search);
pageUrl = url.get('page');
cat = url.get('cat');
const $header = document.createElement('div');
$header.classList.add("menu-header");
$body.appendChild($header);
const navBar = document.createElement('h1')
$header.appendChild(navBar);
navBar.classList.add("category-navbar");


const request = async () => {
    const response = await fetch(`https://foodog.herokuapp.com/articles?page=${pageUrl}`);
    const json = await response.json();
    const main = document.querySelector('main');
    json.docs.map(doc => {
        doc.tagForArticle.map(y => {
            if(y.toLowerCase() === cat.toLowerCase()) {
                const el = document.createElement('foo-dog');
                el.doc = doc;
                main.appendChild(el);
                navBar.innerHTML = cat;
            }
        })
    });

    const pageContainer = document.querySelector('.category-pagecounter');
    for (let i = 1; i <= json.pages; i++) {
        const pageNumber = document.createElement('page-number');
        const pageation = document.createElement('a');
        pageContainer.appendChild(pageNumber);
        pageNumber.appendChild(pageation);
        pageation.classList.add('page-num')
        pageation.href = `CategoryPage.html?page=${i}`
        pageation.innerHTML = i;
    }
}

request();

class Foodog extends HTMLElement {
    set doc(doc) {
        this.innerHTML = /*html*/`
                <div class="category-div">
                    <div class="category-img">
                        <a href="#"><img src=${doc.imgUrl}></a>
                    </div>
                    <div class="category-subject">
                        <a href="#" class="category-title"> ${doc.tagForArticle} |</a>
                        <h3 class="category-header"><a href="#">${doc.title}</a></h3>
                        <p class="category-paragraph">${doc.text}</p>
                        <div class="category-share">
                            <div class="share-icon"><a href="#"><i class="fas fa-share"></i> Share</a></div>
                            <div class="round-buttons">
                                <a href="www.facebook.com"><i class="fab fa-facebook"></i></i></a>
                                <a href="https://twitter.com/intent/tweet?text=Superfoods+in+Your+Kitchen%3A+Carrots+for+Dogs&url=http%3A%2F%2Fdigest.thefarmersdog.com%2Fsuperfoods-kitchen-carrots-dogs%2F&via=farmersdog"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.pinterest.com/pin/24980972918988287/?showsignup=1"><i class="fab fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>

                </div> `

    }
}

customElements.define('foo-dog', Foodog);


