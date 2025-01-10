let press = document.querySelector(".btn-continue")
press.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="new-5.html";
    }, 500);
});