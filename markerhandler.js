AFRAME.registerComponent("markerHandler",{
    init: function(){
   this.el.addEventListener("markerFound", () => {
       this.handleMarkerFound()
   })
   this.el.addEventListener("markerLost", () => {
       this.handleMarkerLost()})
   },
     handleMarkerFound: function(){
       var buttonDiv = document.getElementById("button-div")
       buttonDiv.style.display="flex"
   
       var ratingButtton = document.getElementById("rating-button")
       var orderButton = document.getElementById("order-button")
       ratingButtton.addEventListener("click", () => {
           swal({
               icon: "warnning", tittle: "calificar platillo", text: "procesando calificación"
   
           })
       })
   
       orderButtton.addEventListener("click", () => {
           swal({
               icon: "https://i.imgur.com/4NZ6uLY.jpg", tittle: "gracias por tu orden", text: "recibiras tu orden pronto"
               
           })
       })
     },
     handleMakerLost: function(){
       var buttonDiv = document.getElementById("button-div")
       buttonDiv.style.display="none"
       
     }
   });