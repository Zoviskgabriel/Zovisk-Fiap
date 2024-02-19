/*
- abaixo do array "frutas", verifique se "abacaxi" existe no array. 
Se existir, exiba no console a mensagem "A string "abacaxi" existe no array
frutas.";
- Se "abacaxi" nao existir, verifique se "pera" existe no array. se existir,
exiba no console a mensagem "A string "pera" existe no array frutas.";
- Se nenhuma das duas frutas existirem no array, exiba no console a mensagem
"Nem pera nem abacaxi existem no array "frutas".".
*/


let frutas = ["morango","banana","mamão","pera"];

if (frutas.includes('abacaxi')) {
    console.log('A string "abacaxi"  existe no array');
}else if (frutas.includes("pera")) {
    console.log('"A string "pera" existe no array frutas');
} else {
    console.log('Nem pera nem abacaxi existem no array"Frutas"');
}
