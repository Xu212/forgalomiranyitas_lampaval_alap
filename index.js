window.addEventListener("load", init);
function init(){
    document.querySelector(".zold").style.opacity="0.5";
        setTimeout(function(){
            document.querySelector(".piros").style.backgroundColor="red";
        }, 1000)
        setTimeout(function(){
            document.querySelector(".sarga").style.backgroundColor="yellow";
        },2000)
        setTimeout(function(){
            document.querySelector(".sarga").style.backgroundColor="rgb(230, 196, 84)";
            document.querySelector(".piros").style.backgroundColor="rgb(146, 35, 35)";
        },3000)
        setTimeout(function(){
            document.querySelector(".zold").style.opacity="1";
        },4000)
        setTimeout(function(){
            document.querySelector(".auto").classList.add("balroljobbra");
        },4500)
        setTimeout(function(){
            document.querySelector(".zold").style.opacity="0.5";
        },5000)
}