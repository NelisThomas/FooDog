  const request = async () => {
    const response = await fetch('https://foodog.herokuapp.com/articles');
    const json = await response.json();
    console.log(json);
    const main = document.querySelector('main')
    json.docs.forEach(doc => {
        const el = document.createElement('foo-dog');
        el.doc = doc;
        main.appendChild(el);
    });
}

request();

class Foodog extends HTMLElement {
    
    set doc(doc) {
        this.innerHTML = `
        <div class="container" style="margin-left:140px;">
        <div class="row" style="border-bottom:1px solid black;margin-bottom: 15%;">
            <div class="col" style="margin-bottom:6%">
                <a href="#"><img src=${doc.imgUrl} class="img-fluid"></a>
            </div>
            <div class="col" style="margin-bottom:6%;padding-left:4%">
                <h6 style="margin-bottom: 7%"><a href="#" class="nutrition-link">${doc.tagForArticle[1]} |</a></h6>
                <h4 style="margin-bottom: 7%"><a href="#" class="header-link">${doc.title}</a></h4>
                <p style="line-height: 3"><a href="#" class="paragraph-link">${doc.title}</a></p>
                <div class="share-icon" style="margin-top: 11%"><i class="fas fa-share" style="border: 1px solid #cbcbcb;border-radius:50%;padding:14px"></i> Share</div>
            </div>
            
        </div>
    </div>
        `
    }
}

customElements.define('foo-dog', Foodog);