let NUMERO = LEER NUMERO;

if (NUMERO % 2 == 0) {
    limite = 0
} else {
    limite = 1
}

while (NUMERO >= limite) {
    console.log(NUMERO);
    NUMERO -= 2;
}