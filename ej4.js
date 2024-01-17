function calcularFibonacci() {
    let userInput = document.getElementById("numeroInput").value; //tomamos lo que ingresa
    let num = parseInt(userInput); 

    if (isNaN(num) || num < 0) { //ve que sea un valor válido
        alert("Ingrese un número válido y positivo.");
        return; 
    }

    let resultado = generarSecuenciaFibonacci(num);
    let resultadoP = document.getElementById("resultado"); //para que aparezca en em dom
    resultadoP.textContent = `Secuencia de Fibonacci (${num} números): ${resultado.join(", ")}`;

    console.log("Secuencia de Fibonacci:", resultado);
}
function generarSecuenciaFibonacci(n) {
    let secuencia = [];
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            secuencia.push(i); //.push agrega valores al final, es un método de array
        } else {
            secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
        }
    }
    return secuencia;
} //busque info para hacer la secuencia