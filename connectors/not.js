// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso dirigir 
// Maior de idade
// Possuir habilitação
// Ser Brasileiro



let idade = 18;
let possuoCnh = true;
let nacionalidade = "brasileira";

if (!(idade >= 18 && possuoCnh === true && nacionalidade === "brasileira")) {
    console.log("Você não pode dirigir!");
}
else {
    console.log("Você pode dirigir!");
}

// Imagine o contexto de pegar as informações do usuário no banco de dados através de um endpoint na apai /users/22
let respostaApi = null; // nao existe o codigo 22
let users = respostaApi ?? "Dados do Usuário {}" //nullish 