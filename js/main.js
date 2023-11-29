const arrowUp = document.querySelector(".fa-circle-arrow-up");
window.onscroll=function(){
    window.scrollY >=500 ? arrowUp.classList.add("show") : arrowUp.classList.remove("show");
};
arrowUp.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
document.getElementById("offcanvas").style.top="50%";