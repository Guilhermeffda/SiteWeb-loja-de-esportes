<?php

$id = $_POST ["id"];

$con = mysqli_connect('localhost:3306', 'root', 'Guilherme15', 'loja');

$query = "INSERT INTO carrinho (idcarrinho) VALUE ('$id')";

mysqli_query($con, $query);

?>