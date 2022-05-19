const objetos =

[{
    "nome": "Joaquim",
    "idade": 6,
    "endereco": "Rua xxxx, 101",
    "email": "joaquim@email.com",
    "atextra": ["natação", "judo"]
},

{
    "nome": "Ana",
    "idade": 5,
    "endereco": "Rua xxxx, 110",
    "email": "ana@email.com",
    "atextra": [null]
}

]


console.log(objetos);
console.log (typeof objetos);

const jsonData = JSON.stringify(objetos);

console.log (jsonData);
console.log (typeof jsonData);

const objData = JSON.parse(jsonData);

console.log (objData)
console.log (typeof objData);

objData.map((aluno) => {
    console.log (aluno.nome) ;
    console.log (aluno.idade);
})
    
