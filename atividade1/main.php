<?php
$temperatura = $_POST['temperatura'];
$unidade = $_POST['unidade'];
$unidadeVirar = $_POST['unidadeVirar'];
$resultado = 0;
if($unidadeVirar == "C"){
    if($unidade == "F"){
        $resultado = ($temperatura - 32) * 5/9;
    }else if($unidade == "K"){
        $resultado = $temperatura - 273.15;
    }
}else if($unidadeVirar == "F"){
    if($unidade == "C"){
        $resultado = ($temperatura * 9/5) + 32;
    }else if($unidade == "K"){
        $resultado = ($temperatura - 273.15) * 9/5 + 32;
    }
}else if($unidadeVirar == "K"){
    if($unidade == "C"){
        $resultado = $temperatura + 273.15;
    }else if($unidade == "F"){
        $resultado = ($temperatura - 32) * 5/9 + 273.15;
    }
}

echo "<h1>Resultado da Conversão</h1>";
echo "<h2>Temperatura Convertida: $resultado</h2>";
echo "<h1>Conversão de Temperatura</h1>";
echo "<h2>Temperatura: $temperatura</h2>";
echo "<h2>Unidade: $unidade</h2>";
?>