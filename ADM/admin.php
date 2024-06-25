<?php
$nome = $_POST['nome'];
$descricao = $_POST['descricao'];
$preco = $_POST['preco'];

$con = mysqli_connect('localhost:3306', 'root', 'Guilherme15', 'loja');

$query = "INSERT INTO produtos (nome, descricao, preco) VALUES ('$nome', '$descricao', '$preco')";
mysqli_query($con, $query);

$imagem = $_FILES["imagem"];

if ($imagem && $imagem["type"] == "image/png") {
    $id = mysqli_insert_id($con);
    $novo_endereco = "../upload/" . $id . ".png";
    move_uploaded_file($imagem["tmp_name"], $novo_endereco);
    $mensagem = "Upload realizado com sucesso";
} else {
    $mensagem = "Somente é permitida imagem em formato PNG ou nenhum arquivo foi enviado.";
}

$json = json_encode($mensagem);
echo $json;
?>
