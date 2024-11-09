alert('Boas vindas, digite um número');
let numero = prompt('Digite 1 ou -1');

if (numero === '1') {
    alert(`O número ${numero} é positivo`);
} else if (numero === '-1') {
    alert(`O número ${numero} é negativo`);
} else {
    alert('Número inválido! Por favor, digite 1 ou -1.');
}
