function ComprobarPeso(){
    const peso = document.getElementById('peso').value;
    const valor = parseInt(peso);
    const img = document.getElementById('gorda');
    if (isNaN(valor)) {
        document.getElementById('resultado').textContent = "El valor ingresado no es un número válido.";
    } else {
        console.log("validacion");
        if(valor >= 100){
            img.src = "gorda.jpeg"
            document.getElementById('resultado').textContent = "PINCHE GORDA"
        }else {
            img.src = "tabien.jpg"
            document.getElementById('resultado').textContent = "tas bien"

        }
    }
}



