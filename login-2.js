let page = document.querySelector(".btn-goggle")
page.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="verify-7.html";
    }, 300);
});


const goon = document.querySelector(".btn-continue")
goon.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="travelguide-10.html";
    }, 100);
});
  


let close = document.getElementById("close");
let password = document.getElementById("password");
close.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        close.src = "./images/show-password-icon-eye-symbol-vision-hide-from-vector-41904267.jpg"
    }else{
        password.type = "password";

    }
}