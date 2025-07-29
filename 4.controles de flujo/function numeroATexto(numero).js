function numeroATexto(numero) {
    if (numero == 1) return "uno";
    if (numero == 2) return "dos";
    if (numero == 3) return "tres";
    if (numero == 4) return "cuatro";
    if (numero == 5) return "cinco";
    if (numero == 6) return "seis";
    if (numero == 7) return "siete";
    if (numero == 8) return "ocho";
    if (numero == 9) return "nueve";
    if (numero == 10) return "diez";
    if (numero == 99) return "noveintainueve"
    if (numero == 100) return "sapo"
    return "no sé";
}

// Usar la función
console.log(numeroATexto(5));
console.log(numeroATexto(8));
console.log(numeroATexto(99));
console.log(numeroATexto(100))