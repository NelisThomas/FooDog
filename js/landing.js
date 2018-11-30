const request5 = async () => {
    const response = await fetch(`https://foodog.herokuapp.com/articles`);
    const json = await response.json();
    const landingShadow = document.createElement('foodog-landing')
    const mainSection = document.querySelector('main-landing');
    mainSection.appendChild(landingShadow);
    let jsonDocs = json.docs;
    landingShadow.jsonDocs = jsonDocs;
}

request5();

class Landing extends HTMLElement {
    set jsonDocs(jsonDocs) {
        this.innerHTML = /*html*/`
  <section class="first-container">

<section class="first-block">

    <div class="first-block-1-1">
        <div class="block1-1-img">
            <a href=""><img src="images/dog3.jpg"></a>
        </div>
        <div class="block1-1-txt">
            <div><a href="" class="tagName">WELLNESS</a></div>
            <div><a href="" class="mainArticleTitle">5 REASONS YOUR DOG IS VOMITING</a></div>
        </div>
    </div>
    <div class="first-block-1-2">
        <article>
            <div class="block1-2-img">
                <a href="" ><img src="images/sample.jpeg"></a>
            </div>
            <div class="block1-2-txt">
                <a href="" class="subtitle">TOP 14 FRESH SNACKS FOR DOGS</a>
            </div>
        </article>
        <article>
            <div class="block1-2-img">
                <a href="" ><img src="images/sample.jpeg"></a>
            </div>
            <div class="block1-2-txt">
                <a href="" class="subtitle">WHY SKINNY DOGS LIVE LONGER</a>
            </div>

        </article>
        <article>
            <div class="block1-2-img">
                <a href="" ><img src="images/sample.jpeg" /></a>
            </div>
            <div class="block1-2-txt">
                <a href="" class="subtitle">THE 10 MOST DANGEROUS FOODS FOR DOGS</a>
            </div>
        </article>
        <article>
            <div class="block1-2-img">
                <a href="" ><img src="images/sample.jpeg" /></a>
            </div>
            <div class="block1-2-txt">
                <a href="" class="subtitle">THE HISTORY OF COMMERCIAL PET FOOD: A GREAT AMERICAN MARKETING STORY</a>
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
                    <a href=""><img src="images/dog4.jpg" /></a>
                </div>
                <div class="article-dog-txt">
                    <div class="article-dog-tags">
                        <a href="#">FEATURED</a> <a href="#">NUTRITION</a>
                    </div>
                    <div class="article-dog-title">
                        <a href="#">THE TRUTH ABOUT TABLE SCRAPS FOR DOGS</a>
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
                    <a href="" ><img src="images/dog4.jpg" /></a>
                </div>
                <div class="article-dog-txt">
                    <div class="article-dog-tags">
                        <a href="#">FEATURED</a> <a href="#">NUTRITION</a>
                    </div>
                    <div class="article-dog-title">
                        <a href="#">DOES YOUR DOG NEED PROBIOTICS, TOO?</a>
                    </div>
                    <div class="article-dog-text-exerp">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                  
                    <div class="article-dog-share">
                        <div class="article-dog-share-img"><img src="images/Social-media/Arrow5.jpg" /></div>
                        <span class="article-dog-share-share">SHARE</span>
                    </div>
                </div>
            </article>
            <article class="article-dog">
                <div class="article-dog-img">
                    <a href="" ><img src="images/dog4.jpg" /></a>
                </div>
                <div class="article-dog-txt">
                    <div class="article-dog-tags">
                        <a href="#">FEATURED</a> <a href="#">NUTRITION</a>
                    </div>
                    <div class="article-dog-title">
                        <a href="#">COOKING FOR YOUR DOG?<br> WATCH OUT FOR THESE NUTRIENT DEFICIENCIES</a>
                    </div>
                    <div class="article-dog-text-exerp">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    
                    <div class="article-dog-share">
                        <div class="article-dog-share-img"><img src="images/Social-media/Arrow5.jpg" />
                        </div>
                        <span class="article-dog-share-share">SHARE</span>                                
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
                <a href="#"><img src="images/dog2.jpg" /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href="#" value="tags">link for tags here</a>
                </div>
                <div class="latest-posts-title">
                    <a href="#" value="title">link title here</a>
                </div>

                <div class="latest-posts-excerp">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="#"><img src="images/dog2.jpg" /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href="#" value="tags">link for tags here</a>
                </div>
                <div class="latest-posts-title">
                    <a href="#" value="title">link title here</a>
                </div>
                <div class="latest-posts-excerp">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="#"><img src="images/dog2.jpg" /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href="#" value="tags">link for tags here</a>
                </div>
                <div class="latest-posts-title">
                    <a href="#" value="title">link title here</a>
                </div>
                <div class="latest-posts-excerp">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="#"><img src="images/dog2.jpg" /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href="#" value="tags">COMMUNITY</a>
                </div>
                <div class="latest-posts-title">
                    <a href="#" value="title">WHY NATIONAL PET IS MORE THAN JUST A HOLIDAY</a>
                </div>
                <div class="latest-posts-excerp">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="#"><img src="images/dog2.jpg" /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href="#" value="tags">link for tags here</a>
                </div>
                <div class="latest-posts-title">
                    <a href="#" value="title">link title here</a>
                </div>
               
                <div class="latest-posts-excerp">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </article>
        <article>
            <div class="latest-posts-img">
                <a href="#"><img src="images/dog2.jpg" /></a>
            </div>
            <div class="latest-posts-txt-zone">
                <div class="latest-posts-tags">
                    <a href="#" value="tags">COMMUNITY</a>
                </div>
                <div class="latest-posts-title">
                    <a href="#" value="title">WHY NATIONAL PET IS MORE THAN JUST A HOLIDAY</a>
                </div>
                <div class="latest-posts-excerp">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

