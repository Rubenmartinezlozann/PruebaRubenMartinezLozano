let PERSONAS = LEER PERSONAS;
let numMayores = 0;
let numMenores = 0;
let numHombresMayores = 0;
let numMujeresMenores = 0;
let numMujeres = 0;

for (let i = 0; i < 50; i++) {
    if (PERSONAS[i].sexo == "Masculino") {
        if (PERSONAS[i].edad >= 18) {
            numMayores++;
            numHombresMayores++;
        } else {
            numMenores++;
        }
    } else {
        numMujeres++;
        if (PERSONAS[i].edad >= 18) {
            numMayores++;
        } else {
            numMenores++;
            numMujeresMenores++;
        }
    }
}

console.log("Cantidad de personas mayores de edad: " + numMayores);
console.log("Cantidad de personas menores de edad: " + numMenores);
console.log("Cantidad de personas masculinas mayores de edad: " + numHombresMayores);
console.log("Cantidad de personas femeninas menores de edad: " + numMujeresMenores);
console.log("Porcentaje que representan las personas mayores de edad respecto al total de personas: " + numMayores * 100 / 50 + "%");
console.log("Porcentaje que representan las mujeres respecto al total de personas: " + numMujeres * 100 / 50 + "%");