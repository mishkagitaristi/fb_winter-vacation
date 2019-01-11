let authFunc = {
    userValue : function () {
        return value = document.getElementById('userLogin').value;
    },
    passwordValue : function (){
        return value = document.getElementById('userPassword').value;
    },
    logIn : function() {
        if (this.userValue() && this.passwordValue()) 
        {
            for(let i = 0; i < userData.length; i++){
                if(this.userValue() == userData[i].login && this.passwordValue() == userData[i].password) {
                    
                    document.getElementById('render').innerHTML = template.loggedIn;
                    // Timeline Functions
                    timelineFunc.articleRender();
                    // Chat Functions
                    chatFunc.userListRender();
                    chatFunc.chatRender();
                    break;
                }
            };
        } else{
            alert('Wrong Username or Password!!')
        }
    },
    logOut : function() {
        document.getElementById('render').innerHTML = template.logIn;
    }
}