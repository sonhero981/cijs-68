let boxColor = document.querySelectorAll(".box");

boxColor.forEach(box => {
    box.onclick = function randomColor(){
        let R = Math.floor(Math.random() * 255) ;
        let G = Math.floor(Math.random() * 255) ;
        let B = Math.floor(Math.random() * 255) ;
        let A = Math.random()
        box.style.backgroundColor = `rgba(${R}, ${G}, ${B}, ${A})`
    }
    
});

