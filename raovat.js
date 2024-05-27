

var currentSide = "box-1";
var index = Number(currentSide.charAt(currentSide.length - 1));

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

btnLeft.addEventListener("click", function() {
    
    if(index > 1){
        index = index - 1;
        var newSide = currentSide.slice(0,-1) + index;
        showNews(index);
        currentSide = newSide;
    }
});

btnRight.addEventListener("click", function() {

    if(index < 4){
        index = index + 1;
        var newSide = currentSide.slice(0,-1) + index;
        showNews(index);
        currentSide = newSide;
    }
   
});

function showNews(index) {
    
    if(index == 1){
        btnLeft.style.opacity = '0.3'
    }
    else if(index == 4)
       btnRight.style.opacity = '0.3'
    else{
        btnLeft.style.opacity = '1'
        btnRight.style.opacity = '1'
    }
    
    for(var i = 1; i<=4;i++){
        var item = document.querySelector(`.box-${i}`);
        var x = index * -100 + 100;
        item.style.transform = `translateX(${x}%)`;
    }
}
