let chatFunc = {
    userListRender : function(){
        document.getElementById('friendlist').innerHTML = '';
        for (i = 0; i < randomFunc.randomNumber(150); i++){
            document.getElementById('friendlist').innerHTML += 
            `<li class="navigation__list-item" onclick="chatFunc.chatOpen()">
                <a href="javascript:void(0)" class="navigation__list-link">
                    <div class="navigation__list-link-inner">
                        <div class="navigation__list-left">
                            <div class="navigation__list-image">
                                <img src="./assets/images/avatars/img${randomFunc.randomNumber(9)}.png">
                            </div>
                            <div class="navigation__list-text">
                                <span class="navigation__list-name">${randomFunc.randomUser()}</span>
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
    chatRender : function(){
        let sendMsg = document.getElementById('sendMessage');
        let bodySendMsg = document.getElementById('msgBody');
        let inputText = document.getElementById('chatTextarea');

        sendMsg.innerHTML = "";
        for (i = 0; i < chatData.length; i++){
            console.log(i,chatData);
            sendMsg.innerHTML += 
            `<p class="msg__body-message" id="msgBodyMessage">${chatData[i].message}</p>`;
        }
        inputText.addEventListener('keyup', function(key){
            if (key.keyCode == 13) {
                if(inputText.value == '') return;
                chatFunc.chatMessage();
                let timeOut = setTimeout(function(){
                    clearTimeout(timeOut);
                    bodySendMsg.scrollTop = bodySendMsg.scrollHeight;
                },100)
                chatFunc.chatRender();
            }
        })
        inputText.value = '';
    },
    chatOpen : function(){
        chatContainer = document.getElementById('chatContainer');
        chatContainer.style.display = "block";
        this.chatName();

    },
    chatClose : function (){
        chatContainer = document.getElementById('chatContainer');
        chatContainer.style.display = "none";
    },
    chatTextarea : function(){
        return document.getElementById('chatTextarea').value;
    },
    chatMessage : function(){
        chatData.push(
            {
                message : `${this.chatTextarea()}`,
            }
        )
    },
    chatName : function(){
        document.getElementById('chatName').innerHTML = randomFunc.randomUser();
    }
}