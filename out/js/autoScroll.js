jQuery(function(){

    
    window.onresize = windowResize;
    
    let outerWrapHeight = $("#carouselExampleControls").height();
    outerWrapHeight = outerWrapHeight.toString() + "px";
    document.documentElement.style.setProperty("--outerWrapHeight", outerWrapHeight);
    
    let listHeight = $("#inner-wrap").height();
    listHeight = "-" + listHeight.toString() + "px";
    document.documentElement.style.setProperty("--listHeight", listHeight);
    console.log("height: ", listHeight);
})

function windowResize(){
    let h = $("#carouselExampleControls").height();
    h = h.toString() + "px";
    document.documentElement.style.setProperty("--outerWrapHeight", h)
}