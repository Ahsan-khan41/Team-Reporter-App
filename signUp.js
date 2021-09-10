const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signUp = document.getElementById('signUp');
const instructions = document.getElementById('instructions');
let userValidation = document.getElementById('userValidation');
let emailValidation = document.getElementById('emailValidation');
let passwordValidation = document.getElementById('passwordValidation');

//Submit button form validation

signUp.addEventListener('click', () => {
    // created a flag for checking user 
    var userCond = true;

    // form validation

    if (userName.value === "") {
        userCond = false;
        instructions.innerHTML = 'Please fill all the fields!';
        
        // console.log(userCond)
    }
    if (email.value === "") {
        userCond = false;
        instructions.innerHTML = 'Please fill all the fields!'
    }

    if (password.value === "") {
        userCond = false;
        instructions.innerHTML = 'Please fill all the fields!'
    }
 
    // Making constructor Function for User data into local storage

    function UserData(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // setting data to constructor

    if(userCond){
        user1 = new UserData(userName.value, email.value, password.value);
        let getFromLocalS = localStorage.getItem('localUser1');

        if(getFromLocalS == null){
            var arr1 = [];
        }
        else{
            var getArrayFromlocalS = localStorage.getItem('localUser1');
            arr1 = JSON.parse(getArrayFromlocalS);
        }
        
        arr1.push(user1);

        localStorage.setItem('localUser1', JSON.stringify(arr1));
        window.location = './dashboard.html';
    }
    
    
});