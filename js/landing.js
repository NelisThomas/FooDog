const request5 = async () => {
    const response = await fetch(`https://foodog.herokuapp.com/articles`);
    const json = await response.json();
    const landingShadow = document.createElement('foodog-landing')
    const mainSection = document.querySelector('main-landing');
    mainSection.appendChild(landingShadow);
    let jsonDocs = json.docs;
    landingShadow.jsonDocs = jsonDocs;
    console.log(jsonDocs.pages);
}

request5();

class Landing extends HTMLElement {
    set jsonDocs(jsonDocs) {
        this.innerHTML = /*html*/`
  <section class="first-container">

<section class="first-block">

    <div class="first-block-1-1">
        <div class="block1-1-img">
            <a href="ArticlePage.html?id=${jsonDocs[0]._id}"><img src=${jsonDocs[0].imgUrl}></a>
        </div>
        <div class="block1-1-txt">
            <div><a href=CategoryPage.html?cat=${jsonDocs[0].tagForArticle[0]} class="tagName">${jsonDocs[0].tagForArticle}</a></div>
            <div><a href="ArticlePage.html?id=${jsonDocs[0]._id}" class="mainArticleTitle">${jsonDocs[0].title}</a></div>
        </div>
    </div>
    <div class="first-block-1-2">
        <article>
            <div class="block1-2-img">
                <a href="ArticlePage.html?id=${jsonDocs[4]._id}"><img src=${jsonDocs[4].imgUrl}></a>
            </div>
            <div class="block1-2-txt">
                <a href="ArticlePage.html?id=${jsonDocs[4]._id}" class="subtitle">${jsonDocs[4].title}</a>
            </div>
        </article>
        <article>
            <div class="block1-2-img">
                <a href="ArticlePage.html?id=${jsonDocs[5]._id}"><img src=${jsonDocs[5].imgUrl}></a>
            </div>
            <div class="block1-2-txt">
                <a href="ArticlePage.html?id=${jsonDocs[5]._id}" class="subtitle">${jsonDocs[5].title}</a>
            </div>

        </article>
        <article>
            <div class="block1-2-img">
                <a href="ArticlePage.html?id=${jsonDocs[6]._id} "><img src=${jsonDocs[6].imgUrl}/></a>
            </div>
            <div class="block1-2-txt">
                <a href="ArticlePage.html?id=${jsonDocs[6]._id} "class="subtitle">${jsonDocs[6].title}</a>
            </div>
        </article>
        <article>
            <div class="block1-2-img">
                <a href="ArticlePage.html?id=${jsonDocs[2]._id}" ><img src=${jsonDocs[2].imgUrl} /></a>
            </div>
            <div class="block1-2-txt">
                <a href="ArticlePage.html?id=${jsonDocs[2]._id}" class="subtitle">${jsonDocs[2].title}</a>
            </div>
        </article>
    </div>
</section>
<section class="second-block">
    <div class="block-title">FEATURED POSTS
       <hr>
    </div>
    <div class="block2-1-and-2">
        <div class="block2-1-container">
            <article class="article-dog">
                <div class="article-dog-img">
                    <a href="ArticlePage.html?id=${jsonDocs[1]._id}"><img src=${jsonDocs[1].imgUrl}/></a>
                </div>
                <div class="article-dog-txt">
                    <div class="article-dog-tags">
                        <a href="CategoryPage.html?cat=${jsonDocs[0].tagForArticle[1]}">${jsonDocs[1].tagForArticle}</a>
                    </div>
                    <div class="article-dog-title">
                        <a href="ArticlePage.html?id=${jsonDocs[1]._id}">${jsonDocs[1].title}</a>
                    </div>
                    <div class="article-dog-text-exerp">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                  
                    <div class="category-share">
                            <div class="share-icon"><a href="#"><i class="fas fa-share"></i> Share</a></div>
                            <div class="round-buttons">
                                <a href="www.facebook.com"><i class="fab fa-facebook"></i></i></a>
                                <a href="https://twitter.com/intent/tweet?text=Superfoods+in+Your+Kitchen%3A+Carrots+for+Dogs&url=http%3A%2F%2Fdigest.thefarmersdog.com%2Fsuperfoods-kitchen-carrots-dogs%2F&via=farmersdog"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.pinterest.com/pin/24980972918988287/?showsignup=1"><i class="fab fa-pinterest"></i></a>
                            </div>
                        </div>
                </div>
            </article>
            <article class="article-dog">
                <div class="article-dog-img">
                    <a href="ArticlePage.html?id=${jsonDocs[2]._id}"><img src=${jsonDocs[2].imgUrl} /></a>
                </div>
                <div class="article-dog-txt">
                    <div class="article-dog-tags">
                        <a href="CategoryPage.html?cat=${jsonDocs[2].tagForArticle[2]}">${jsonDocs[2].tagForArticle}</a>
                    </div>
                    <div class="article-dog-title">
                        <a href="ArticlePage.html?id=${jsonDocs[2]._id}">${jsonDocs[2].title}</a>
                    </div>
                    <div class="article-dog-text-exerp">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                  
                    <div class="category-share">
                            <div class="share-icon"><a href="#"><i class="fas fa-share"></i> Share</a></div>
                            <div class="round-buttons">
                                <a href="www.facebook.com"><i class="fab fa-facebook"></i></i></a>
                                <a href="https://twitter.com/intent/tweet?text=Superfoods+in+Your+Kitchen%3A+Carrots+for+Dogs&url=http%3A%2F%2Fdigest.thefarmersdog.com%2Fsuperfoods-kitchen-carrots-dogs%2F&via=farmersdog"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.pinterest.com/pin/24980972918988287/?showsignup=1"><i class="fab fa-pinterest"></i></a>
                            </div>
                        </div>
                </div>
            </article>
            <article class="article-dog">
                <div class="article-dog-img">
                    <a href="ArticlePage.html?id=${jsonDocs[3]._id}"><img src=${jsonDocs[3].imgUrl} /></a>
                </div>
                <div class="article-dog-txt">
                    <div class="article-dog-tags">
                        <a href="CategoryPage.html?cat=${jsonDocs[3].tagForArticle[3]}">${jsonDocs[3].tagForArticle}</a>
                    </div>
                    <div class="article-dog-title">
                        <a href="ArticlePage.html?id=${jsonDocs[3]._id}">${jsonDocs[3].title}</a>
                    </div>
                    <div class="article-dog-text-exerp">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                  
                    <div class="category-share">
                            <div class="share-icon"><a href="#"><i class="fas fa-share"></i> Share</a></div>
                            <div class="round-buttons">
                                <a href="www.facebook.com"><i class="fab fa-facebook"></i></i></a>
                                <a href="https://twitter.com/intent/tweet?text=Superfoods+in+Your+Kitchen%3A+Carrots+for+Dogs&url=http%3A%2F%2Fdigest.thefarmersdog.com%2Fsuperfoods-kitchen-carrots-dogs%2F&via=farmersdog"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.pinterest.com/pin/24980972918988287/?showsignup=1"><i class="fab fa-pinterest"></i></a>
                            </div>
                        </div>
                </div>
            </article>

        </div>
        <div class="block2-2-container">
            <div class="block2-2-social-zone">
                <div class="facebook-rectangle"><a href="" ><img src="images/Social-media/facebook1.png" /></a>
                    <p class="social-txt">LIKE</p>
                </div>
                <div class="twitter-rectangle"><a href="" ><img src="images/Social-media/twitter1.png" /></a>
                    <p class="social-txt">FOLLOW</p>
                </div>
                <div class="instagram-rectangle"><a href="" ><img src="images/Social-media/instagram1.png" /></a>
                    <p class="social-txt">FOLLOW</p>
                </div>
            </div>
            <div class="publicity-img">
                <a href="#"><img id="advertising" src="images/ADVdog.webp" /></a>
            </div>
        </div>
    </div>
</section>


<section class="third-block">
    <div class="special-block3-title">
        <div class="block-title">
            LATEST POSTS
            <hr>
        </div>
    </div>
    <div class="latest-posts-article-container">
        <article>
            <div class="latest-posts-img">
                <a href="ArticlePage.html?id=${jsonDocs[4]._id}"><img src=${jsonDocs[4].imgUrl} /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href=CategoryPage.html?cat=${jsonDocs[4].tagForArticle[0]} value="tags">${jsonDocs[4].tagForArticle}</a>
                </div>
                <div class="latest-posts-title">
                    <a href="ArticlePage.html?id=${jsonDocs[4]._id}" value="title">${jsonDocs[4].title}</a>
                </div>

                <div class="latest-posts-excerp">
                    <p>
                        ${jsonDocs[4].text}
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="ArticlePage.html?id=${jsonDocs[5]._id}"><img src=${jsonDocs[5].imgUrl} /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href=CategoryPage.html?cat=${jsonDocs[5].tagForArticle[0]} value="tags">${jsonDocs[5].tagForArticle}</a>
                </div>
                <div class="latest-posts-title">
                    <a href="ArticlePage.html?id=${jsonDocs[5]._id}" value="title">${jsonDocs[5].title}</a>
                </div>

                <div class="latest-posts-excerp">
                    <p>
                        ${jsonDocs[5].text}
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="ArticlePage.html?id=${jsonDocs[6]._id}"><img src=${jsonDocs[6].imgUrl} /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href=CategoryPage.html?cat=${jsonDocs[6].tagForArticle[0]} value="tags">${jsonDocs[6].tagForArticle}</a>
                </div>
                <div class="latest-posts-title">
                    <a href="ArticlePage.html?id=${jsonDocs[6]._id}" value="title">${jsonDocs[6].title}</a>
                </div>

                <div class="latest-posts-excerp">
                    <p>
                        ${jsonDocs[6].text}
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="ArticlePage.html?id=${jsonDocs[7]._id}"><img src=${jsonDocs[7].imgUrl} /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href=CategoryPage.html?cat=${jsonDocs[7].tagForArticle[0]} value="tags">${jsonDocs[7].tagForArticle}</a>
                </div>
                <div class="latest-posts-title">
                    <a href="ArticlePage.html?id=${jsonDocs[7]._id}" value="title">${jsonDocs[7].title}</a>
                </div>

                <div class="latest-posts-excerp">
                    <p>
                        ${jsonDocs[7].text}
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="ArticlePage.html?id=${jsonDocs[8]._id}"><img src=${jsonDocs[8].imgUrl} /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href=CategoryPage.html?cat=${jsonDocs[8].tagForArticle[0]} value="tags">${jsonDocs[8].tagForArticle}</a>
                </div>
                <div class="latest-posts-title">
                    <a href="ArticlePage.html?id=${jsonDocs[8]._id}" value="title">${jsonDocs[8].title}</a>
                </div>

                <div class="latest-posts-excerp">
                    <p>
                        ${jsonDocs[8].text}
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="ArticlePage.html?id=${jsonDocs[9]._id}"><img src=${jsonDocs[9].imgUrl} /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href=CategoryPage.html?cat=${jsonDocs[9].tagForArticle[0]} value="tags">${jsonDocs[9].tagForArticle}</a>
                </div>
                <div class="latest-posts-title">
                    <a href="ArticlePage.html?id=${jsonDocs[9]._id}" value="title">${jsonDocs[9].title}</a>
                </div>

                <div class="latest-posts-excerp">
                    <p>
                        ${jsonDocs[9].text}
                    </p>
                </div>
            </div>
        </article>
    </div>

</section>
<section class="fourth-block">
    <div class="fourth-block-alignement">
        <div class="pagination-block">
            <div id="first-bouton-pagination">1</div>
            <div>2</div>
            -
            <div>17</div>
            <div> > </div>
        </div>
    </div>
</section>
</section>
           `
    }
}

customElements.define('foodog-landing', Landing);

