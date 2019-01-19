let load = {
    userIndex : 0,
    userStatus : false,
    passwordStatus : false,
    render : document.getElementById('render'),
    currentUser : Number(localStorage.getItem('currentUser')),
    userValue : function () {
        return value = document.getElementById('userLogin').value;
    },
    passwordValue : function (){
        return value = document.getElementById('userPassword').value;
    },
    action: function(){
        if(this.userIndex == this.currentUser){
            this.render.innerHTML = template.logIn;
            // ფუნქციები რაც უნდა ჩაიტვირთოს დალოგინებამდე
            users.check();
        }else{
            this.render.innerHTML = template.loggedIn;
            // ფუნქციები რაც უნდა ჩაიტვირთოს დალოგინების შემდეგ
            timelineFunc.articleRender();
            chatFunc.userListRender();
            chatFunc.chatRender();
            imgFunc.profileImg();
        }
    },
    logIn : function() {
        for (let i = 0; i < users.storage.length; i++){
            this.userStatus = false;
            if(this.userValue() == users.storage[i].login){
                this.userStatus = true;
                this.userIndex = i;
                localStorage.setItem('currentUser', this.userIndex);
                break;
            }
        }
        for (let x = 0; x < users.storage.length; x++){
            this.passwordStatus = false;
            if(this.passwordValue() == users.storage[this.userIndex].password){
                this.passwordStatus = true;
                break;
            }
        }
        if (this.userStatus == true && this.passwordStatus == true){
            defaultUser.splice(1, 1, users.storage[this.userIndex]);
            location.reload();
        } else{
            alert('Wrong Username or Password !!')
        }
    },
    logOut : function() {
        localStorage.removeItem('currentUser');
        localStorage.setItem('currentUser', 0);
        this.userIndex = 0;
        location.reload();
    }
}
