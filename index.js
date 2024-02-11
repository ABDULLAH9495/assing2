document.getElementById("button").addEventListener("click", function(){
    alert("Button is Clicked")
    }) 

    const divElement= document.getElementById("col");
    divElement.addEventListener("mouseover", function(){
    divElement.style.backgroundColor = ("red")
    })
    divElement.addEventListener("mouseout", function(){
        divElement.style.backgroundColor = ("green")
        })