let press = document.querySelector(".btn-started")
press.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="travel-8.html";
    }, 500);
});