let timelineFunc = {
    articleTextArea : function(){
        return document.getElementById('textarea').value;
    },
    articleRender : function(){
        document.getElementById('articles').innerHTML = '';
        for(let i=0; i < newsfeed.length; i++){
            document.getElementById('articles').innerHTML += 
            `<article class="article">
            <div class="article__heading fl_jus-bet">
                <div class="article__top-left fl_center">
                    <div class="article__top-author">
                        <a href="#"><img src="./assets/images/avatars/img${randomFunc.randomNumber(9)}.png" alt="Author Image" class="article__top-author-img"></a>
                    </div>
                    <div class="article__top-text">
                        <h2 class="article__top-heading"><a href="#">${newsfeed[i].userName}</a></h2>
                        <span class="article__top-time"><a href="#">${randomFunc.randomNumber(48)} hrs</a></span>
                    </div>
                </div>
                <div class="article__top-right fl_center">
                    <a href="#" class="article__top-dots"></a>
                </div>
            </div>

            <div class="article__center fl_col">
                <div class='article__center-text' id="postText">${newsfeed[i].timeLine}</div>
                <div class="article__center-inner flex">
                    <div class="article__center-left fl_center">
                        <a href="#" class="center-left-icons left-icons-like"></a>
                        <a href="#" class="center-left-icons left-icons-love"></a>
                        <a href="#" class="center-left-numbers">${randomFunc.randomNumber(100)}</a>
                    </div>
                    <div class="article__center-right fl_center">
                        <a href="#" class="center-right-shares">${randomFunc.randomNumber(50)} Shares</a>
                    </div>
                </div>
            </div>
            <div class="article__footer fl_col">
                <div class="article__footer-icons">
                    <a href="#" class="article__footer-button fl_center">
                        <span class="article__footer-icon article__footer-like">Like</span>
                    </a>
                    <a href="#" class="article__footer-button fl_center">
                        <span class="article__footer-icon article__footer-comment">Comment</span>
                    </a>
                    <a href="#" class="article__footer-button fl_center">
                        <span class="article__footer-icon article__footer-share">Share</span>
                    </a>
                </div>
                <div class="article__footer-comment"></div>
            </div>
            </article>`;

            document.getElementById('textarea').value = '';
        }
    },
    articlePost : function(){
        if(this.articleTextArea() !== '') {
            newsfeed.push(
                {
                    userName : `${randomFunc.randomUser()}`,
                    timeLine : `${this.articleTextArea()}`
                }
            )
        }
        this.articleRender();
    },
}