let imgFunc = {
    profileImg : function() {
        let profileImg = document.querySelectorAll('.profile__img');

        for(let i = 0; i < profileImg.length; i++){
            if(users.storage[load.currentUser].gender == 'male') {
                profileImg[i].setAttribute('src', './assets/images/male.jpg');
            } else if(users.storage[load.currentUser].gender == 'female') {
                profileImg[i].setAttribute('src', './assets/images/female.jpg');
            }
        }
    }
}