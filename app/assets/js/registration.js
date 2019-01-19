let reg = {
    render : document.getElementById('render'),
    userStatus : true,
    getFirstName : function() {
        let regfirstName = document.getElementById('regfirstName');
        return regfirstName.value;
    },
    getlastName : function() {
        let reglastName = document.getElementById('reglastName');
        return reglastName.value;
    },
    getEmail : function() {
        let regEmail = document.getElementById('regEmail');
        return regEmail.value;
    },
    getPassword : function() {
        let regPassword = document.getElementById('regPassword');
        return regPassword.value;
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
        for (let i = 0; i < gender.length ; i++){
            if (gender[i].checked){
                return gender[i].value;
            }
        }
    },
    signUp : function() {
        for(let i = 0; i < users.storage.length; i++){
            if(this.getEmail() == users.storage[i].login){
                this.userStatus = false;
                break;
            }
        }
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
                    gender : `${this.getGender()}`
                }
            );
            alert("You have been successfully registered ^_^");
            this.render.innerHTML = template.logIn;
            users.resetStorage();
        } else{
            alert("O.o Something Went Wrong!!!");
        }
    }
}

