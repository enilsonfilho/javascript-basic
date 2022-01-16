const nome = "Nirsu";
const idade = 2021 - 1940;
const cidadeDeNascimento = "Arredores de buco!";

let apresentacao = "Meu nome é " + nome + ", minha idade é de " + idade + " anos" + ", minha cidade de nascimento é " + cidadeDeNascimento;
console.log(apresentacao);

// Utilizando template string 
apresentacao = `Meu nome é ${nome}, minha idade é de ${idade} anos, minha cidade de nascimento é ${cidadeDeNascimento}`;
console.log(apresentacao);
