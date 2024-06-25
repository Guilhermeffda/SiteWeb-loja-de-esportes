<?php

    $id = $_POST ["id"];

    $con = mysqli_connect('localhost:3306', 'root', 'Guilherme15', 'loja');

    $query = "DELETE FROM carrinho WHERE idcarrinho = '$id'";

    mysqli_query($con, $query);

    
?>