document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
        document.querySelector("html").classList.toggle("overflow-hidden")
        
    })
})
