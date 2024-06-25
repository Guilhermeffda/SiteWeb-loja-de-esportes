<?php

    $id = $_POST ["id"];

    $con = mysqli_connect('localhost:3306', 'root', 'Guilherme15', 'loja');

    $query = "DELETE FROM produtos WHERE id_produtos = '$id'";

    mysqli_query($con, $query);

?>