const inputQR = document.getElementById("inputQR")
const inputBtn = document.getElementById("inputBtn")
const contenedor = document.getElementById("contenedor");

inputBtn.addEventListener("click", () =>{
    if(inputQR.value){
        sessionStorage.setItem("url",inputQR.value)
        window.location.replace("QR.html");
        e.preventDefault()
    }
})
