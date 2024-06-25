window.onload = async function carrega() {
    var resultado = await fetch("Php/getProduct.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    for (var i = 0; i < 10; i++) {
        var template = `
            <div class="card">
                <div class="card-imagem">
                    <img src="upload/${dados[i].id_produtos}.png" width="230px"/>
                </div>
                <div class="card-titulo">
                    <p>${dados[i].nome}</p>
                </div>
                <div class="card-desc">
                    <p>${dados[i].descricao}</p>
                </div>
                <div class="card-preco">
                    <p>${dados[i].preco}</p>
                </div>
                <div class="card-carro" onclick="carrinho(${dados[i].id_produtos})">
                    Adicionar ao Carrinho
                </div>
            </div>`;
        var produtosElement = document.getElementById('produtos');
        if (produtosElement) {
            produtosElement.innerHTML += template;
        }
    }
}

function carrinho(id) {
    var dados = new FormData();
    dados.append("id", id)

    fetch("Php/addCarrinho.php", {
        method: "POST",
        body: dados
    });
}

function handleSearch() {
    var searchItem = document.getElementById("search-box").value.toLowerCase();
    var cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        var titulo = card.querySelector('.card-titulo p').innerText.toLowerCase();
        var descricao = card.querySelector('.card-desc p').innerText.toLowerCase();
        var preco = card.querySelector('.card-preco p').innerText.toLowerCase();

        if (titulo.includes(searchItem) || descricao.includes(searchItem) || preco.includes(searchItem)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
window.onload = async function carrega() {
    var resultado = await fetch("Php/getProduct.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    for (var i = 0; i < 10; i++) {
        var template = `
            <div class="card">
                <div class="card-imagem">
                    <img src="upload/${dados[i].id_produtos}.png" width="230px"/>
                </div>
                <div class="card-titulo">
                    <p>${dados[i].nome}</p>
                </div>
                <div class="card-desc">
                    <p>${dados[i].descricao}</p>
                </div>
                <div class="card-preco">
                    <p>${dados[i].preco}</p>
                </div>
                <div class="card-carro" onclick="carrinho(${dados[i].id_produtos})">
                    Adicionar ao Carrinho
                </div>
            </div>`;
        var produtosElement = document.getElementById('produtos');
        if (produtosElement) {
            produtosElement.innerHTML += template;
        }
    }
}

function carrinho(id) {
    var dados = new FormData();
    dados.append("id", id)

    fetch("Php/addCarrinho.php", {
        method: "POST",
        body: dados
    });
}

function handleSearch() {
    var searchItem = document.getElementById("search-box").value.toLowerCase();
    var cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        var titulo = card.querySelector('.card-titulo p').innerText.toLowerCase();
        var descricao = card.querySelector('.card-desc p').innerText.toLowerCase();
        var preco = card.querySelector('.card-preco p').innerText.toLowerCase();

        if (titulo.includes(searchItem) || descricao.includes(searchItem) || preco.includes(searchItem)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
    