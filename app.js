const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const signIn = document.getElementById('signIn');
let instructions = document.getElementById('instructionsSsignIn');

//getting data from local Storage

let userData = localStorage.getItem('localUser1');
// console.log('userData');

if (userData == null) {
    userData = [];
} else {
    userData = JSON.parse(userData);
}

// console.log(userData[0].password);

//Add event listener on sign In button

signIn.addEventListener('click', () => {
    let flag = false;

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === inputEmail.value && userData[i].password === inputPassword.value && inputEmail.value != "" && inputPassword.value != "") {
            flag = true;
        }
    }

    if(!flag){
        instructions.innerHTML = 'Your Account doest exist, Please Sign Up !'
    }
    else{
        console.log('welcome to dashboard');
        window.location.href = './dashboard.html';
    }
})