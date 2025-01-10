let go = document.querySelector(".btn-continue")
go.addEventListener("click",() => {
    document.body.classList.add("slide-out-left");
    setTimeout(() =>{
        window.location.href ="check-4.html";
    }, 300);
});



let cancel = document.querySelector(".btn-cancel")
cancel.addEventListener("click",() => {
    document.body.classList.add("slide-out-left");
    setTimeout(() =>{
        window.location.href ="login-2.html";
    }, 300);
});