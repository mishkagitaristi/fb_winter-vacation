let fastLogIn = {
    storageUsers: JSON.parse(localStorage.getItem("users")),
    popupPassword : function(){
        let popupPassword = document.getElementById('popupPassword').value;
        return  popupPassword;
    },
    loginOpen: function (value){   
        let profileTop = document.getElementById('profileTop');
        let profileName = document.getElementById('profileTopName');
        let popupImage = document.getElementById('popupImage');
        let popupLoginBtn = document.getElementById('popupLoginBtn');
        let popupPassword = document.getElementById('popupPassword');
        profileTop.style.display = "block";
        profileName.innerHTML = this.storageUsers[value].firstName +' '+this.storageUsers[value].lastName;
        popupImage.setAttribute('src', this.userImageRender(value));
        popupLoginBtn.addEventListener("click", function(){
            load.userIndex = value;
            if(fastLogIn.storageUsers[value].password == fastLogIn.popupPassword()){
                localStorage.setItem('currentUser', value);
                defaultUser.splice(1, 1, users.storage[value]);
                location.reload();
            }else{
                popupPassword.value = '';
                popupPassword.style.border = "1px solid #ff0000";
            }
        });
        
    },
    loginClose: function(){
        let profileTop = document.getElementById('profileTop');
        profileTop.style.display = "none";

    },
    userImageRender: function(value){
        if(this.storageUsers[value].gender == 'male') {
            return './assets/images/male.jpg'
        } else if(this.storageUsers[value].gender == 'female') {
            return './assets/images/female.jpg'
        }
    },
    userLoginRender: function(){
        let fastLogin = document.getElementById('fastLogin');
        fastLogin.innerHTML = '';
        if(this.storageUsers != null){
            if(this.storageUsers.length == 1){
                fastLogin.innerHTML += 
                `<a class="recent__item" href="#">
                    <div class="recent__noimg"></div>
                    <span class="recent__name blue">Add Account</span>
                </a>`
            }
            for( let i = 1; i < this.storageUsers.length; i++ ){
                fastLogin.innerHTML += 
                `<a class="recent__item" href="#">
                    <div  onclick="fastLogIn.loginOpen(${i})">
                        <img class="recent__img" src="${this.userImageRender(i)}" alt="Profile Image">
                        <span class="recent__name">${this.storageUsers[i].firstName}</span>
                    </div>
                    <div class="recent__btn" onclick="fastLogIn.deleteUser(${i})"></div>
                </a>`
            }
        }else if(this.storageUsers == null){
            fastLogin.innerHTML += 
            `<a class="recent__item" href="#">
                <div class="recent__noimg"></div>
                <span class="recent__name blue">Add Account</span>
            </a>`
        }
    },
    deleteUser : function(value){
        this.storageUsers.splice(value, 1);
        let save = this.storageUsers
        localStorage.removeItem("users");
        localStorage.setItem("users", JSON.stringify(save));
        location.reload();
    }
}
