// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.

/*
SE eu tenho 18 anos e tenho CNH eu posso dirigir.

*/


let idade = 18;
let possuoCnh = true;
let nacionalidade = "brasileira";


if (idade >= 18 && possuoCnh === true && nacionalidade === "brasileira") {
    console.log("Você está apto para dirigir, parabéns!");
}
else {
    console.log("Você não pode dirigir!");
}

