var indice_questao = 0;
var pontos = 0;

var perguntas =     ['Capital do brasil', 'Capital do Ceará',  'Aceleração da gravidade'];
var alternativa_a = ['Brasilia',            'Recife',           '9,8m/s'];
var alternativa_b = ['Salvador',            'Fortaleza',        '0'];
var alternativa_c = ['Rio de Janeiro',      'Juazeior',         '13m/s'];
var resposta =      ['Brasilia',            'Fortaleza',        '9,8m/s'];

function mostraPergunta() {
    var exibir = this.perguntas[this.indice_questao];
    document.write(exibir);
}
function atualizaPergunta() {
    return this.perguntas[this.indice_questao];
    
}

function atualizaAlternativa_A() {
    return this.alternativa_a[this.indice_questao];
}
function atualizaAlternativa_B() {
    return this.alternativa_b[this.indice_questao];
}
function atualizaAlternativa_C() {
    return this.alternativa_c[this.indice_questao];
}

function mostraAlternativa_A() {
    var exibir = this.alternativa_a[this.indice_questao];
    document.write(exibir);
}
function mostraAlternativa_B() {
    var exibir = this.alternativa_b[this.indice_questao];
    document.write(exibir);
}
function mostraAlternativa_C() {
    var exibir = this.alternativa_c[this.indice_questao];
    document.write(exibir);
}

function respondelAlternativa_A() {
    if(this.alternativa_a[this.indice_questao] == this.resposta[this.indice_questao]){
        this.pontos++;
    }
    proximo();
}
function respondelAlternativa_B() {
    if(this.alternativa_b[this.indice_questao] == this.resposta[this.indice_questao]){
        this.pontos++;
    }
    proximo();
}
function respondelAlternativa_C() {
    if(this.alternativa_c[this.indice_questao] == this.resposta[this.indice_questao]){
        this.pontos++;
    }
    proximo();
}

function proximo(){
    this.indice_questao++;
    alert("Indice questão: " + this.indice_questao + " | Tamnhao Array perrgunta: " + this.perguntas.length);
    if(this.indice_questao == this.perguntas.length){
        finaliza();
    } else {
        atualizaTela();
    }
}

function finaliza(){
    document.getElementById("area_jogo").innerHTML = '<h1>FIM DE JOGO</h1>';

    document.getElementById("inf_jogador").innerHTML = '<h3>Pontos: '+ getPontos() +'</h3>'
}

function atualizaTela(){
    document.getElementById("area_jogo").innerHTML =
    '<h1>' + atualizaPergunta() + '</h1>' +
    '<br><br><br>' +
    '<button onclick="respondelAlternativa_A()">A - ' + atualizaAlternativa_A() + '</button>' +
    '<br>' +
    '<button onclick="respondelAlternativa_B()">B - ' + atualizaAlternativa_B() + '</button>' +
    '<br>' +
    '<button onclick="respondelAlternativa_C()">C - ' + atualizaAlternativa_C() + '</button>';

    document.getElementById("inf_jogador").innerHTML = '<h3>Pontos: '+ getPontos() +'</h3>'
}

function getPontos() {
    return this.pontos;
}