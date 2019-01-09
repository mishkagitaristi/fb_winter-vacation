let functions = {
    userValue : function () {
        return value = document.getElementById('userLogin').value;
    },
    passwordValue : function (){
        return value = document.getElementById('userPassword').value;
    },
    logInBtn : function() {
        if (this.userValue() == userData.user0.login && this.passwordValue() == userData.user0.password ||
            this.userValue() == userData.user1.login && this.passwordValue() == userData.user1.password) 
        {
            document.getElementById('render').innerHTML = template.loggedIn;
            this.newsFeed();
            this.userListRender();
            this.chatRender();
        } else if(this.userValue() == '' || this.passwordValue() == ''){ 
            alert("WRONG INFO!");
        } else if(this.userValue() !== userData.user0.login && this.passwordValue() !== userData.user0.password ||
                  this.userValue() !== userData.user1.login && this.passwordValue() !== userData.user1.password) 
        {
            alert('do you speak English motherfucker? do you speak it?!');
        }
    },
    randomNumber : function(num){
        return Math.floor(Math.random() * num) + 1;
    },
    randomUser : function(){
        let randomFirstName = randomUser.randomFirstName[Math.floor(Math.random()*randomUser.randomFirstName.length)];
        let randomLastName = randomUser.randomLastName[Math.floor(Math.random()*randomUser.randomLastName.length)];
        return randomFirstName + " " + randomLastName
    },
    textAreaValue : function(){
        return document.getElementById('textarea').value;
    },
    newsFeed : function(){
        document.getElementById('articles').innerHTML = '';
        for(let i=0; i < newsfeed.length; i++){
            document.getElementById('articles').innerHTML += 
            `<article class="article">
            <div class="article__heading fl_jus-bet">
                <div class="article__top-left fl_center">
                    <div class="article__top-author">
                        <a href="#"><img src="./assets/images/avatars/img${functions.randomNumber(9)}.png" alt="Author Image" class="article__top-author-img"></a>
                    </div>
                    <div class="article__top-text">
                        <h2 class="article__top-heading"><a href="#">${newsfeed[i].userName}</a></h2>
                        <span class="article__top-time"><a href="#">${functions.randomNumber(48)} hrs</a></span>
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
                        <a href="#" class="center-left-numbers">${functions.randomNumber(100)}</a>
                    </div>
                    <div class="article__center-right fl_center">
                        <a href="#" class="center-right-shares">${functions.randomNumber(50)} Shares</a>
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
        if(functions.textAreaValue() !== '') {
            newsfeed.push(
                {
                    userName : `${functions.randomUser()}`,
                    timeLine : `${functions.textAreaValue()}`
                }
            )
        }
        functions.newsFeed();
    },
    userListRender : function(){
        document.getElementById('friendlist').innerHTML = '';
        for (i = 0; i < this.randomNumber(150); i++){
            document.getElementById('friendlist').innerHTML += 
            `<li class="navigation__list-item" onclick="functions.chatOpen()">
            <a href="javascript:void(0)" class="navigation__list-link">
                <div class="navigation__list-link-inner">
                    <div class="navigation__list-left">
                        <div class="navigation__list-image">
                            <img src="./assets/images/avatars/img${functions.randomNumber(9)}.png">
                        </div>
                        <div class="navigation__list-text">
                            <span class="navigation__list-name">${this.randomUser()}</span>
                        </div>
                    </div>
                    <div class="navigation__list-right">
                        <div class="navigation__list-wave"></div>
                        <div class="navigation__list-status">
                            <span class="status__online"></span>
                        </div>
                    </div>
                </div>
            </a>
        </li>`;
            
        }
    },
    chatOpen : function(){
        chatContainer = document.getElementById('chatContainer');
        chatContainer.style.display = "block";
    },
    chatClose : function (){
        chatContainer = document.getElementById('chatContainer');
        chatContainer.style.display = "none";
    },
    chatRender : function(){
        document.getElementById('sendMessage').innerHTML = "";
        for (i = 0; i < chat.length; i++){
            document.getElementById('sendMessage').innerHTML += 
            `<p class="msg__body-message">${chat[i].message}</p>`;
        }
        document.getElementById('chatTextarea').addEventListener('keyup', function(e){
            if (e.keyCode == 13) {
              functions.chatMessage();
            }
        })
        document.getElementById('chatTextarea').value = '';
    },
    chatMessage : function(){
        if(functions.chatTextarea() !== '') {
            chat.push(
                {
                    message : `${functions.chatTextarea()}`,
                }
            )
        }
        functions.chatRender();

    },
    chatTextarea : function(){
        return document.getElementById('chatTextarea').value;
    }
}







