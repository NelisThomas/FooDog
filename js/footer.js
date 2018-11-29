let scrollButton = document.querySelector('#go-up-icon');
window.onscroll = () => {scrollFunction()};
const scrollFunction = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollButton.style.opacity = 1;
    } else {
        scrollButton.style.opacity = 0;
    }
}

const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



const request2 = async () => {
    const response = await fetch(`https://foodog.herokuapp.com/articles`);
    const json = await response.json();
    const mainShadow = document.createElement('foodog-footer')
    const mainDiv = document.querySelector('.main-footer');
    mainDiv.appendChild(mainShadow);
    let jsonDocs = json.docs;
    mainShadow.jsonDocs = jsonDocs;
}

request2();

class Footer extends HTMLElement {
    set jsonDocs(jsonDocs) {
        this.innerHTML = /*html*/`
        <footer>
            <div class="footer-row1">
    <div class="container-row1">
        <div class="zone1">
            <div class="footer-title">CATAGORIES</div>
            <div class="container-category">
                <ul>
                <li><a href="CategoryPage.html?cat=community">Community</a></li>
                <li><a href="CategoryPage.html?cat=healthcare">Healthcare</a></li>
                <li><a href="CategoryPage.html?cat=lifestyle">Lifestyle</a></li>
                <li><a href="CategoryPage.html?cat=nutrition">Nutrition</a></li>
                <li id="special-one"><a href="CategoryPage.html?cat=wellness">Wellness</a></li>
            </ul>
            </div>
        </div>

        <div class="popular-col">
            <div class="footer-title">POPULAR POSTS</div>
            <div class="container-popular">

                <article class="popular-row">
                    <div class="img-rand-foot"><a href=ArticlePage.html?id=${jsonDocs[0]._id}><img src=${jsonDocs[0].imgUrl} /></a></div>
                    <div class="txt-rand-foot"><a href=ArticlePage.html?id=${jsonDocs[0]._id}>${jsonDocs[0].title}</a></div>
                </article>
                <article class="popular-row">
                    <div class="img-rand-foot"><a href=ArticlePage.html?id=${jsonDocs[1]._id}><img src=${jsonDocs[1].imgUrl} /></a></div>
                    <div class="txt-rand-foot"><a href=ArticlePage.html?id=${jsonDocs[1]._id}>${jsonDocs[1].title}</a></div>
                </article>
                <article class="popular-row">
                    <div class="img-rand-foot"><a href=ArticlePage.html?id=${jsonDocs[2]._id}><img src=${jsonDocs[2].imgUrl} /></a></div>
                    <div class="txt-rand-foot"><a href=ArticlePage.html?id=${jsonDocs[2]._id}>${jsonDocs[2].title}</a></div>
                </article>
            </div>
        </div>

        <div class="instagram-col">
            <div class="footer-title">INSTAGRAM</div>
            <div class="container-instagram">
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
                <div><img src="images/dog2.jpg" /></div>
            </div>
        </div>
    </div>
</div>
        </footer>                
        <footer2>
                    <div class="footer-row2-1">
                        <div class="container-social">
                            <div><img src="images/Social-media/facebook1.png" /></div>
                            <div><img src="images/Social-media/twitter1.png" /></div>
                            <div><img src="images/Social-media/instagram1.png" /></div>
                        </div>
                    </div>
                    <div class="footer-row2-2">
                        <div>2017 &#169; The Farmer's Dog</div>
                    </div>
                </footer2>
           `
    }
}

customElements.define('foodog-footer', Footer);
scrollButton.addEventListener('click', toTop);

