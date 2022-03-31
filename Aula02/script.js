//BOTÃO 1
function button1() {
let contagem = document.createElement('p');
document.body.appendChild(contagem);

for(var i=1; i<=10; i++){
    contagem.textContent += i + " ";
}

const primeiro = document.createElement('p');
for(var i = 0; i < primeiro.length ; i++) {
primeiro[i].addEventListener('click', button1);
}

}

//BOTÃO 2
function button2() {
let debitoTecnico = document.createElement('p');
debitoTecnico.textContent = 'Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade.';
document.body.appendChild(debitoTecnico);
}
const segundo = document.getElementsByClassName('button2');
for(var i = 0; i < segundo.length ; i++) {
segundo[i].addEventListener('click', button2);
}

//BOTÃO 3
function button3() {
window.location.href = "https://blog.myscrumhalf.com/sonar-apoiando-a-qualidade-do-desenvolvimento-de-software/"
let sonar = document.createElement('p');
sonar.textContent = '';
document.body.appendChild(sonar);
}
const terceiro = document.querySelectorAll('button3');
for(var i = 0; i < terceiro.length ; i++) {
terceiro[i].addEventListener('click', button3);
}

//BOTÃO 4
function button4() {
window.location.href = "https://blog.mandic.com.br/artigos/5-perspectivas-para-impulsionar-a-produtividade-usando-jenkins/"
let jenkins = document.createElement('p');
jenkins.textContent = '';
document.body.appendChild(jenkins);
}
const quarto = document.querySelectorAll('button3');
for(var i = 0; i < quarto.length ; i++) {
quarto[i].addEventListener('click', button4);
}