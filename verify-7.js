let page = document.querySelector(".btn-reset")
page.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="travelguide-10.html";
    }, 300);
});