AFRAME.registerComponent("creatbuttons",{
    init: function(){
        var button1 = document.createElement("button");
        button1.innerHTML= "ORDENAR";
        button1.setAttribute("id", "order-button");
        button1.setAttribute("class", "btn btn-danger ml-3 mr-3")

        var button2 = document.createElement("button");
        button2.innerHTML= "RESUMEN";
        button2.setAttribute("id", "order-summary-button");
        button2.setAttribute("class", "btn btn-danger ml-3")

        var buttonDiv = document.getElementById("button-div");
        buttton1.innerHTML= "RESUMEN";
        buttonDiv.appendChild(button2);
        buttonDiv.appendChild(button1)
    }
});