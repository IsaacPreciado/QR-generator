document.getElementById("contenedor").style.display = "block"
        const data = sessionStorage.getItem("url")
        new QRCode(document.getElementById("contenedor"), data);
        const qr = document.getElementsByTagName("img")[2]
        qr.className = "QR"

        const downloadBtn = document.getElementById("downloadBtn")
        downloadBtn.addEventListener("click", () =>{
            const qr = document.getElementsByTagName("img")[2]
            document.getElementById("link").href = qr.src
            document.getElementById("link").click()
        })

        const shareBtn = document.getElementById("shareBtn")
        shareBtn.addEventListener("click", () => {
            const url = sessionStorage.getItem("url")
            navigator.clipboard.writeText(url);
            alert("Link copied")
        })