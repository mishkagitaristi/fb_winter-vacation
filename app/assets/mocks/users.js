let defaultUser = [
    {},
    {
        firstName : 'მიხეილ',
        lastName : 'მამნიაშვილი',
        login : '1',
        password : '1',
        birthDay : {
            month : '4',
            day : '22',
            year : '1994'
            },
        gender : 'male',
    }
]

let users = {
    storage: JSON.parse(localStorage.getItem("users")),
    check: function(){
        if(users.storage == null){
            let usersStorage = [];
            usersStorage.push(defaultUser[1]);
            localStorage.setItem("users", JSON.stringify(defaultUser));
            users.storage = JSON.parse(localStorage.getItem("users"));
        }
    },
    resetStorage: function(){
        localStorage.removeItem("users");
        localStorage.setItem("users", JSON.stringify(this.storage));
    }
}

let randomUser = {
    randomFirstName : ['ნიკა', 'გიგა','ნინო','ვერო','გოჩა','სოსო','გივი','ქეთო'],
    randomLastName : ['გიგაური','კარელიძე','კირთაძე','მამოიანი','პარუნოვი','ავალიანი','ჯიბუტი']
};
