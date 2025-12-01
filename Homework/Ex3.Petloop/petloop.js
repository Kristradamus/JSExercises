window.addEventListener("load", function(){
    if(window.location.hash){
        history.replaceState(null, null, " ");
    }
    window.scrollTo(0, 0);
})