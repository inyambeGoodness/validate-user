/// form container1&2
const formContainer = document.querySelector(".form_container");
const formContainer2 = document.querySelector(".form_container2");

// fresh sign up button and log in button
const signUpBtn = document.querySelector(".registration");
const logInBtn = document.querySelector(".registration2");

// google and git parent div
const loginParent = document.querySelector(".git_div");

//welcome text
const welcomeTest = document.querySelector(".welcome");

//already registered text class
const accountConfirmation = document.querySelector(".text");

// user error in form container1
const userErr = document.querySelector(".user_err");

// email and username error in form container2
const newEmailErr = document.querySelector(".newemail_err");
const newUsernameErr =  document.querySelector(".username_err")

// sign up button
const signUp = document.querySelector("#signup");

//log in button
const login = document.querySelector("#login")


//variables to store new user infos
let firstname = document.querySelector("#firstname"); 
let lastname = document.querySelector("#lastname");
let username = document.querySelector("#username");
let email = document.querySelector("#new_email");
let password = document.querySelector("#new_password");

//variables to login old users
let oldemail = document.querySelector("#email");
let oldpassword = document.querySelector("#password");

//welcome back
let welcomeBack = document.querySelector("#welcome_back");


//ring circle 2
let ringCircle = document.querySelector(".ring_circle2")

 


const dataBases = [{
                    firstname:"jojo",
                    lastname:"ade",
                    username:"jojoade",
                    email:"jojo@gmail.com",
                    password:"123pass"
                },
                {
                    firstname:"john",
                    lastname:"doe",
                    username:"johndoe01",
                    email:"johndoe@gmail.com",
                    password:"123pass"
                }
];


class oldUser{
        constructor(email,password,dataBases){
        this.email = email;
        this.password = password;
        this.dataBases = dataBases;
    }

    validateInfo(){
        for(let dataBase of this.dataBases){
            if(this.email !== dataBase.email || this.password!== dataBase.password){
                userErr.style.color = "red";
                userErr.textContent = "incorrect email or password ";

            }else{
                userErr.remove()
                const username = this.dataBases.filter((database)=>{
                    if (this.email===database.email){
                        return database;
                    }
                })
                
                
                welcomeBack.textContent = ` Welcome Back ${username[0].firstname}`;
                ringCircle.style.bottom ="40%";
                ringCircle.style.right ="25%";
                ringCircle.style.animation ="rotatee 12s ease-in-out alternate infinite";
                formContainer.style.display = "none";
                formContainer2.style.display = "none";
                signUpBtn.style.display = "none";
                logInBtn.style.display = "none";
                loginParent.style.display = "none";
                welcomeTest.textContent =  `Welcome Back ${username[0].firstname} `;
                accountConfirmation.style.display = "none"

            }
    }


}
}


class NewUsers{
    constructor(firstname,lastname,username,email,password,dataBases){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.dataBases = dataBases || [];

        
    }
    
    saveUserInfo(){

        this.dataBases.push({
            firstname:this.firstname,
            lastname:this.lastname,
            username:this.username,
            email:this.email,
            password:this.password
        })

    }
    
    validateEmail(){
        for(let dataBase of this.dataBases){
            if(this.email === dataBase.email){              
                newEmailErr.style.color ="red";
                newEmailErr.textContent ="email already exists";
                return;
                
            }else if(this.email === ""){
                newEmailErr.style.color ="red";
                newEmailErr.textContent ="no email entered";
                return;
            }
            else{
                this.saveUserInfo();
                formContainer.style.display = "block";
                formContainer2.style.display = "none";
                signUpBtn.style.display = "none";
                logInBtn.style.display = "none";
                loginParent.style.display = "none";
                welcomeTest.style.color = "#3939AB"
                welcomeTest.textContent = `welcome ${this.firstname} ${this.lastname} 
                                            please sign in`;
                userErr.textContent =""
                accountConfirmation.style.display ="none"
                console.log(dataBases);
            }
        }
    }

    validateUsername(){
        for(let dataBase of this.dataBases){
            if(this.username === dataBase.username){              
                newUsernameErr.style.color ="red";
                newUsernameErr.textContent ="username already exists";          
            }else if(this.username === ""){
                newEmailErr.style.color ="red";
                newEmailErr.textContent ="no Username entered";
                return;
            }
        }
    }
    
    
    
    
}


login.addEventListener('click',(e)=>{
    e.preventDefault();
    let user2 = new oldUser(oldemail.value,oldpassword.value,dataBases)
    user2.validateInfo();

})



signUp.addEventListener('click',(e)=>{
    let user1 = new NewUsers(firstname.value,lastname.value,username.value,email.value,password.value,dataBases)
    e.preventDefault();
    user1.validateUsername();
    user1.validateEmail();


})

console.log(dataBases);

signUpBtn.addEventListener('click',()=>{
        formContainer.style.display = "none";
        formContainer2.style.display = "block";
        signUpBtn.style.display = "none";
        logInBtn.style.display = "flex";
        loginParent.style.display = "none";
        welcomeTest.textContent = "Create Account";
        accountConfirmation.textContent ="Already registered ?"

    
    
    })
    
    
    logInBtn.addEventListener('click',()=>{
        formContainer.style.display = "block";
        formContainer2.style.display = "none";
        signUpBtn.style.display = "flex";
        logInBtn.style.display = "none";
        loginParent.style.display = "block";
        welcomeTest.textContent = "Welcome";
        accountConfirmation.textContent ="Have no account yet ?"
    
    
    })