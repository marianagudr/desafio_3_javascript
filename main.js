for (let i=1; i<=10; i++) {
    let ingresarNombre = prompt("Ingrese su Nombre")
    console.log(ingresarNombre + "," + "tiene el turno" + " " + i + " " + "del día Lunes");
}

let ingreseNumero = prompt("Ingrese un número del 1 al 10");

while (ingreseNumero !=3) {
    alert ("Ese número no es");
    ingreseNumero = prompt("Ingrese otro número del 1 al 10");
}
console.log("¡Elegiste 3! ¡Vas a tener un excelente día!");
