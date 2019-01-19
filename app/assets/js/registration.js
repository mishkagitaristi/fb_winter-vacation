let reg = {
    render : document.getElementById('render'),
    userStatus : true,
    getFirstName : function() {
        let regfirstName = document.getElementById('regfirstName');

        if(regfirstName.value == ''){
            regfirstName.style.borderColor = "#ff0000";
        }else{
            regfirstName.style.borderColor = "#bdc7d8";
            return regfirstName.value;
        }
    },
    getlastName : function() {
        let reglastName = document.getElementById('reglastName');
        
        if(reglastName.value == ''){
            reglastName.style.borderColor = "#ff0000";
        }else{
            reglastName.style.borderColor = "#bdc7d8";
            return reglastName.value;
        }
    },
    getEmail : function() {
        let regEmail = document.getElementById('regEmail');
        
        if(regEmail.value == ''){
            regEmail.style.borderColor = "#ff0000";
        }else{
            regEmail.style.borderColor = "#bdc7d8";
            return regEmail.value;
        }
    },
    getPassword : function() {
        let regPassword = document.getElementById('regPassword');
        
        if(regPassword.value == ''){
            regPassword.style.borderColor = "#ff0000";
        }else{
            regPassword.style.borderColor = "#bdc7d8";
            return regPassword.value;
        }
    },
    getMonth : function() {
        let regMonth = document.getElementById('regMonth');
        let value = regMonth.options[regMonth.selectedIndex].text;
        return value;
    },
    getDay : function() {
        let regDay = document.getElementById('regDay');
        let value = regDay.options[regDay.selectedIndex].text;
        return value;
    },
    getYear : function() {
        let regYear = document.getElementById('regYear');
        let value = regYear.options[regYear.selectedIndex].text;
        return value;
    },
    getGender : function() {
        let gender = document.getElementsByName('gender');
        let checkbox = document.querySelectorAll('.form__gender');
        for (let i = 0; i < gender.length ; i++){
            if (gender[i].checked){
                checkbox[0].style.borderColor = "transparent";
                checkbox[1].style.borderColor = "transparent";
                return gender[i].value;
            }else{
                checkbox[i].style.borderColor = "#ff0000";
            }
        }
    },
    signUp : function() {     
        for(let i = 1; i < users.storage.length; i++){
            if(this.getEmail() == users.storage[i].login){
                this.userStatus = false;
                break;
            }
        }
        if( this.getFirstName() == undefined ||
            this.getlastName() == undefined ||
            this.getEmail() == undefined ||
            this.getPassword() == undefined ||
            this.getGender() == undefined){
                this.getFirstName()
                this.getlastName()
                this.getEmail()
                this.getPassword()
                this.getGender()
                this.userStatus = false;
        }else{
            this.userStatus = true;

        };
        if (this.userStatus == true) {
            users.storage.push(
                {
                    firstName : `${this.getFirstName()}`,
                    lastName : `${this.getlastName()}`,
                    login : `${this.getEmail()}`,
                    password : `${this.getPassword()}`,
                    birthDay : {
                        month : `${this.getMonth()}`,
                        day : `${this.getDay()}`,
                        year : `${this.getYear()}`
                        },
                    gender : `${this.getGender()}`,
                    timline : [],
                    profileImage : []
                }
            );
            alert("You have been successfully registered ^_^");
            this.render.innerHTML = template.logIn;
            location.reload();
            users.resetStorage();
        }
    }
}

