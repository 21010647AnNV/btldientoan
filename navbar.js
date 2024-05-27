
window.addEventListener("scroll", function(){

    var navbar = this.document.querySelector('.sticky');

    if(this.window.scrollY > 380)
        navbar.style.top = "0px";
    else
        navbar.style.top = "-420px"
    

});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onbeforeunload = function() {
    history.scrollRestoration = 'manual';
};