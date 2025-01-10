const goon = document.querySelector(".btn-signin")
goon.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="travelguide-10.html";
    }, 300);
});



let page = document.querySelector(".btn-goggle")
page.addEventListener("click",() => {
    document.body.classList.add("slide-out-right");
    setTimeout(() =>{
        window.location.href ="verify-7.html";
    }, 300);
});