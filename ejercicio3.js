let HORASTRABAJADAS = LEER HORASTRABAJADAS;
let TARIFA = LEER TARIFA;
let sueldo;

if (HORASTRABAJADAS <= 40) {
    sueldo = HORASTRABAJADAS * TARIFA;
} else {
    sueldo = TARIFA * 40 + (HORASTRABAJADAS - 40) * TARIFA * 1.5;
}

console.log(sueldo);