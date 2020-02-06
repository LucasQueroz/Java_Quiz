<!DOCTYPE html>
<html lang="pt-br">

<head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

    <link href="css/template.css" rel="stylesheet">
    <script type="text/javascript" src="../model/SelecionaQuestao.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <!--<script src="js/template.js"></script>-->
    

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quiz</title>
</head>

<body>
    <div class="container-fluid bg-info">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="btn btn-info" href="../index.php">Sair</a>
                    <h3 id="pergunta"><script>mostraPergunta()</script></h3>
                </div>
                <div class="modal-body">
                    <div class="col-xs-3 col-xs-offset-5">
                        <div id="loadbar" style="display: none;">
                            <div class="blockG" id="rotateG_01"></div>
                            <div class="blockG" id="rotateG_02"></div>
                            <div class="blockG" id="rotateG_03"></div>
                            <div class="blockG" id="rotateG_04"></div>
                            <div class="blockG" id="rotateG_05"></div>
                            <div class="blockG" id="rotateG_06"></div>
                            <div class="blockG" id="rotateG_07"></div>
                            <div class="blockG" id="rotateG_08"></div>
                        </div>
                    </div>

                    <div class="quiz" id="quiz" data-toggle="buttons">
                        <label id="alternativa_a" class="element-animation1 btn btn-lg btn-primary btn-block"><input id="letra_a" onclick="respondelAlternativa_A()" type="radio" name="q_answer" value="1">
                            <script>mostraAlternativa_A()</script>
                        </label>
                        <label id="alternativa_b" class="element-animation2 btn btn-lg btn-primary btn-block"><input id="letra_b" onclick="respondelAlternativa_B()" type="radio" name="q_answer" value="2">
                            <script>mostraAlternativa_B()</script>
                        </label>
                        <label id="alternativa_c" class="element-animation3 btn btn-lg btn-primary btn-block"><input id="letra_c" onclick="respondelAlternativa_C()" type="radio" name="q_answer" value="3">
                            <script>mostraAlternativa_C()</script>
                        </label>
                    </div>
                </div>
                <div class="modal-footer text-muted">
                    <span id="points"></span>
                </div>
            </div>
        </div>
    </div>
</body>

</html>