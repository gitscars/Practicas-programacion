const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('mete acá tus numeros che: ', (expression) => {
    const numero = parseInt(expression);
    if (isNaN(numero)) {
        console.log('Eso no es un número válido.');
    } else if (numero % 2 === 0) {
        console.log('El número es par.');
    } else {
        console.log('El número es impar.');
    }
    rl.close();
});