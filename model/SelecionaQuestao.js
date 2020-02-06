var indice_questao = 0;
var pontos = 0;
var valor_acerto = 1000;

var perguntas =     ['Capital do brasil', 'Capital do Ceará',  'Aceleração da gravidade', 'New()'];
var alternativa_a = ['Brasilia',            'Recife',           '9,8m/s',                 'Destroi Objeto'];
var alternativa_b = ['Salvador',            'Fortaleza',        '0',                      'Limpa Objeto'];
var alternativa_c = ['Rio de Janeiro',      'Juazeior',         '13m/s',                  'Cria Objeto'];
var resposta =      ['Brasilia',            'Fortaleza',        '9,8m/s',                 'Cria Objeto'];

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
        //alert("pontos: " +getPontos());
    }
    proximo();
}
function respondelAlternativa_B() {
    if(this.alternativa_b[this.indice_questao] == this.resposta[this.indice_questao]){
        this.pontos++;
        //alert("pontos: " +getPontos());
    }
    proximo();
}
function respondelAlternativa_C() {
    if(this.alternativa_c[this.indice_questao] == this.resposta[this.indice_questao]){
        this.pontos++;
        //alert("pontos: " +getPontos());
    }
    proximo();
}

function proximo(){
    this.indice_questao++;
    if(this.indice_questao >= this.perguntas.length){
        finaliza();
    } else {
        atualizaTela();
    }
}

function finaliza(){
    document.getElementById("pergunta").innerHTML = 'FIM DE JOGO';

    document.getElementById("quiz").innerHTML = '<h4>Parabéns! Você acaba de ganhar: </h4><h3>R$ '+ getPontos() * this.valor_acerto +'</h3>'
    document.getElementById("points").innerHTML = 'Pontos: ' + getPontos();
}

function atualizaTela(){
    document.getElementById("pergunta").innerHTML = atualizaPergunta();
    
    document.getElementById("alternativa_a").innerHTML = '<input id="letra_a" onclick="respondelAlternativa_A()" type="radio" name="q_answer" value="1">' + atualizaAlternativa_A() + '';
    document.getElementById("alternativa_b").innerHTML = '<input id="letra_b" onclick="respondelAlternativa_B()" type="radio" name="q_answer" value="1">' + atualizaAlternativa_B() + '';
    document.getElementById("alternativa_c").innerHTML = '<input id="letra_c" onclick="respondelAlternativa_C()" type="radio" name="q_answer" value="1">' + atualizaAlternativa_C() + '';

    document.getElementById("points").innerHTML = 'R$ ' + getPontos() * this.valor_acerto;
    
    
}

function getPontos() {
    return this.pontos;
}