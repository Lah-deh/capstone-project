let close = document.getElementById("close");
let password = document.getElementById("password");
close.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        close.src = "./images/preview-show-interface-icon-free-vector.jpg"
    }else{
        password.type = "password";

    }
}


const goon = document.querySelector(".btn-reset")
goon.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="travelguide-10.html";
    }, 300);
});