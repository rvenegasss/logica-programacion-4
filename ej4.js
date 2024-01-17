function calcularFibonacci(n) {
    let fibonacciArray = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    return fibonacciArray;
}

// Función para imprimir la serie de Fibonacci en el DOM
function imprimirFibonacciEnDOM() {
    let userInput;
    
    // Solicitar al usuario un número hasta que se ingrese un valor válido
    do {
        userInput = prompt("Ingrese un número para la serie de Fibonacci:");
    } while (isNaN(userInput) || userInput === null);

    const n = parseInt(userInput);

    // Calcular la serie de Fibonacci
    const fibonacciSeries = calcularFibonacci(n);

    // Obtener el elemento del DOM donde se mostrará la serie
    const outputElement = document.getElementById("output");

    // Limpiar contenido anterior
    outputElement.innerHTML = "";

    // Crear un elemento de lista y agregar cada número de la serie
    const ul = document.createElement("ul");
    fibonacciSeries.forEach(num => {
        const li = document.createElement("li");
        li.textContent = num;
        ul.appendChild(li);
    });

    // Agregar la lista al elemento de salida en el DOM
    outputElement.appendChild(ul);
}

// Llamar a la función para imprimir la serie de Fibonacci en el DOM
imprimirFibonacciEnDOM();