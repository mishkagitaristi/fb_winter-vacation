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
        } else if(this.userValue() == '' || this.passwordValue() == ''){ 
            alert("WRONG INFO!");
        } else if(this.userValue() !== userData.user0.login && this.passwordValue() !== userData.user0.password ||
                  this.userValue() !== userData.user1.login && this.passwordValue() !== userData.user1.password) 
        {
            alert('do you speak English motherfucker? do you speak it?!');
        }
    },
    textAreaValue : function(){
        return document.getElementById('textarea').value;
    },
    articlePost : function(event){
        let key = event.keyCode;
        if (key == 13){
            document.getElementById('articles').innerHTML += template.article;
            document.getElementById('postText').innerHTML = this.textAreaValue();
            document.getElementById('textarea').value = '';
        }
    },

}







