let randomFunc = {
    randomNumber : function(num){
        return Math.floor(Math.random() * num) + 1;
    },
    randomUser : function(){
        let randomFirstName = randomUser.randomFirstName[Math.floor(Math.random()*randomUser.randomFirstName.length)];
        let randomLastName = randomUser.randomLastName[Math.floor(Math.random()*randomUser.randomLastName.length)];
        return randomFirstName + " " + randomLastName;
    }  
}