// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.



// Eu posso votar caso eu seja homem ou mulher
// tenha mais de 16 anos 
// tenha titulo de eleitor

let sexo = "h";
let idade = 17;
let possuiTitulo = true;

if (sexo === "h" || sexo === "m") {
    if (idade >= 17 && possuiTitulo === true) {
        console.log("Você pode votar!");
    }
}
else {
    console.log("Você não pode votar!");
}