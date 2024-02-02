let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinbtn.onclick = function(){
    namefield.style.maxHeight = 0 ;
    title.innerHTML="sign in";
    signupbtn.classList.add("disables");
    signinbtn.classList.ramude("disable");

}
signupbtn.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML="sign up";
    signinbtn.classList.ramude("disable");
    signupbtn.classList.add("disable");
}