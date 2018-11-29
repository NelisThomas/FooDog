let url = new URLSearchParams(window.location.search);
articleId = url.get("id");

const request3 = async () => {
  const response = await fetch(`https://foodog.herokuapp.com/articles`);
  const json = await response.json();
  const articleShadow = document.createElement("foodog-article");
  const articleShadow2 = document.createElement("foodog-article2");
  const articleShadow3 = document.createElement("foodog-article3");
  const firstSection = document.querySelector('#page')
  firstSection.appendChild(articleShadow);
  firstSection.appendChild(articleShadow2);
  const mainArticle = document.querySelector("single-page");
  mainArticle.appendChild(firstSection);
  mainArticle.appendChild(articleShadow3);
  let jsonDocs = json.docs;
  jsonDocs.map((x) => {
    let targetId = x._id;
    if (targetId === articleId) {
      return (articleShadow.x = x);
    }
});
  articleShadow2.jsonDocs = json.docs.sort(() => Math.random() - 0.5);
  articleShadow3.jsonDocs = json.docs.sort(() => Math.random() - 0.5);
};

request3();

class Article extends HTMLElement {
  set x(x) {
    this.innerHTML = /*html*/ `
            <div class="articleTop">
                <p class="tagName">${x.tagForArticle}</p>
                <h1 class="articlePageArticleName">${x.title}</h1>
                <img class="articleMainImage" src=${x.imgUrl}>
                <div class="articleDivider">
                    <div class="articleAuthorInfoContainer">
                        <img class="articleAuthorImg" src="images/image480p.jpg">
                        <p class="mobileHide">By: </p>
                        <p id="articleAuthor">THE FARMER'S DOG</p>
                    </div>
                    <div id="commentButton">
                        <i class="fas fa-comment"></i>
                        <p>COMMENT</p>
                    </div>
                    <div class="articleSocialMediaContainer">
                        <p class="shareText mobileHide">SHARE</p>
                        <div id="articleFBButton" class="articleSocialBall">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div id="articleTwitterButton" class="articleSocialBall">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div id="articlePinterestButton" class="articleSocialBall">
                            <i class="fab fa-pinterest"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div id="articleContent">
                <p>${x.text}</p>
            </div>
            <div id="articleFooter">
                <p class="shareText mobileHide">SHARE</p>
                <div id="commentButton2" class="articleFooterSocialButton">
                    <i class="fas fa-comment"></i>
                    <p>COMMENT</p>
                </div>
                <div id="articleFBButton" class="articleFooterSocialButton">
                    <i class="fab fa-facebook-f"></i>
                    <p>SHARE</p>
                </div>
                <div id="articleTwitterButton" class="articleFooterSocialButton">
                    <i class="fab fa-twitter"></i>
                    <p>TWEET</p>
                </div>
                <div id="articlePinterestButton" class="articleFooterSocialButton">
                    <i class="fab fa-pinterest"></i>
                    <p>PIN IT</p>
                </div>
            </div>
            <div id="mobileAd" class="desktopHide">
                <img src="images/Ad.png">
            </div>
            <div id="articleSubscribe">
                <p id="articleSubscribeHeader">Subscribe to The Digest Newsletter</p>
                <p>Get health and wellness tips about your dog delivered to your inbox.</p>
                <div id="subscribeInputContainer">
                    <input id="emailInput" type="text" placeholder="Your email">
                    <div id="signUpButton">
                        <p>SIGN UP</p>
                    </div>
                </div>
            </div>
            <div class="articleNextPrevContainer">
                <div id="previousArticle" class="articleNextPrevButton">
                    <p>
                        < previous article</p> <p id="previousArticleName">${x.title}
                    </p>
                </div>
                <div id="nextArticle" class="articleNextPrevButton">
                    <p>next article ></p>
                    <p id="nextArticleName">next article name</p>
                </div>
            </div>
            <div class="authorContainer">
                <img class="articleAuthorImg" src="images/dog2.jpg">
                <div class="articleAuthorText">
                    <p id="authorName">author name</p>
                    <br>
                    <p id="authorDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam.
                        Repellendus minima eveniet dolorum dolorem possimus distinctio, quam ratione veritatis nam
                        praesentium velit dolores? Quaerat magni aliquam ipsa laudantium quam.</p>
                </div>
            </div>
            `;
  }
}

customElements.define("foodog-article", Article);

class Article2 extends HTMLElement {
  set jsonDocs(jsonDocs) {
    this.innerHTML = /*html*/ `
 <div id="youMightAlsoLike">
                <div class="articleYouMightLike">
                    <a href="ArticlePage.html?id=${jsonDocs[0]._id}"><img class="articleYouMightLikeImg" src=${jsonDocs[0].imgUrl}></a>
                    <a href="ArticlePage.html?id=${jsonDocs[0]._id}"><p class="articleYouMightLikeTitle">${jsonDocs[0].title}</p></a>
                </div>
                <div class="articleYouMightLike">
                <a href="ArticlePage.html?id=${jsonDocs[1]._id}"><img class="articleYouMightLikeImg" src=${jsonDocs[1].imgUrl}></a>
                <a href="ArticlePage.html?id=${jsonDocs[1]._id}"><p class="articleYouMightLikeTitle">${jsonDocs[1].title}</p></a>
                </div>
                <div class="articleYouMightLike">
                <a href="ArticlePage.html?id=${jsonDocs[2]._id}"><img class="articleYouMightLikeImg" src=${jsonDocs[2].imgUrl}></a>
                <a href="ArticlePage.html?id=${jsonDocs[2]._id}"><p class="articleYouMightLikeTitle">${jsonDocs[2].title}</p></a>
                </div>
            </div>
            <div id="responseForm">
                <p id="leaveAResponse">Leave a response</p>
                <textarea id="responseInput" placeholder="Write your comment here..."></textarea>
                <div id="responseFormButtonContainer">
                    <textarea id="nameInput" class="responseInput2" placeholder="Name..."></textarea>
                    <textarea id="emailInput2" class="responseInput2" placeholder="Email..."></textarea>
                    <textarea id="websiteInput" class="responseInput2" placeholder="Website..."></textarea>
                </div>
                <div id="submitResponseButton" value="LEAVE A COMMENT">
                    <p>Leave a comment</p>
                </div>
            </div>
            `;
    }
}

customElements.define("foodog-article2", Article2);

class Article3 extends HTMLElement {
    set jsonDocs(jsonDocs) {
        this.innerHTML = /*html*/ `
        <div id="sideOfScreen">
            <div id="firstDesktopAd" class="desktopAd mobileHide">
                <img src="images/Ad.png">
            </div>
            <div id="popularArticles">
                <div id="popularArticlesContainer">
                    <div id="popularTag">Popular</div>
                    <div class="popularArticle">
                    <a href="ArticlePage.html?id=${jsonDocs[3]._id}"><img class="popularArticleImg" src=${jsonDocs[3].imgUrl}></a>
                        <a class="popularArticleName" href=ArticlePage.html?id=${jsonDocs[3]._id}>${jsonDocs[3].title}</a>
                    </div>
                    <div class="popularArticle">
                    <a href="ArticlePage.html?id=${jsonDocs[4]._id}"><img class="popularArticleImg" src=${jsonDocs[4].imgUrl}></a>
                        <a class="popularArticleName" href="ArticlePage.html?id=${jsonDocs[4]._id}">${jsonDocs[4].title}</a>
                    </div>
                    <div class="popularArticle">
                    <a href="ArticlePage.html?id=${jsonDocs[5]._id}"><img class="popularArticleImg" src=${jsonDocs[5].imgUrl}></a>
                        <a class="popularArticleName" href="ArticlePage.html?id=${jsonDocs[5]._id}">${jsonDocs[5].title}</a>
                    </div>
                    <div id="popularArticlesNextButton">Next>></div>
                </div>
            </div>
            <div id="secondDesktopAd" class="desktopAd mobileHide">
                <img src="images/Ad.png">
            </div>
        </div>
            `;
  }
}

customElements.define("foodog-article3", Article3);
