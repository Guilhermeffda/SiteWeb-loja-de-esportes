
window.onload = async function () {

    var resultado = await fetch("Php/carrinho.php", {
        method: "GET"
    });
  
    var dados = await resultado.json();
    var total = 0;  //isso é importante
  
    for (var i = 0; i < dados.length; i++) {
        var template =
        `<div class="card">
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

                <div class="exclu">
                    <button onclick="excluir(${dados[i].id_produtos})">Remover Produto<button>
                </div>
    </div>`;
  
  
        total += parseFloat(dados[i].preco); //isso é importante
    }
  
  
    var totalElement = document.createElement('p'); //isso é importante
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`; //isso é importante
  
    document.getElementById('total').appendChild(totalElement); //isso é importante
  }

  function excluir(id){
    var dados = new FormData();
    dados.append("id", id)
    fetch("Php/excluir.php", {
        method: "POST", body:dados
    });
}
