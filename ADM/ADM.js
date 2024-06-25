function upload() {

    var arquivo = document.getElementById('upload');
    var dados = new FormData(imagem);

    fetch('admin.php', {
        method: "POST",
        body: dados
    });
}


