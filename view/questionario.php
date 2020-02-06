<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script type="text/javascript" src="../model/SelecionaQuestao.js"></script>

    <title>Questionário</title>
</head>

<body>
    <div id="area_jogo">
        <h1 id="pergunta">
            <script>
                mostraPergunta()
            </script>
        </h1>
        <br><br><br>
        <button id="letra_a" onclick="respondelAlternativa_A()">A - <script>
                mostraAlternativa_A()
            </script></button>
        <br>
        <button id="letra_b" onclick="respondelAlternativa_B()">B - <script>
                mostraAlternativa_B()
            </script></button>
        <br>
        <button id="letra_c" onclick="respondelAlternativa_C()">C - <script>
                mostraAlternativa_C()
            </script></button>
    </div>

    <div id="inf_jogador">
        <h3 id="pontos">Pontos:  <script>getPontos()</script></h3>
    </div>

</body>

</html>