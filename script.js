function pintarColores(numero) {
    reset();
    var heart;
    for (let i = 1; i <= numero; i++) {
        heart = document.getElementById("heart" + i);
        console.log(heart);
        heart.classList.add("pintado");


    }
}

function reset() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("heart" + i).classList.remove("pintado");
    }
}


window.addEventListener("click", function(e) {
    //capturo cualquier click en cualquier sitio "e" es el nombre argument
    if (!document.getElementById("box").contains(e.target)) {
        //si el click NO está dentro del div, limpiar todo
        reset();
    }
});