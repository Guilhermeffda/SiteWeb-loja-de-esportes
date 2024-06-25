let boxBuscar =  document.querySelector(".busca");
let lupa = document.querySelector(".lupa-buscar");
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=>{
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=>{
    boxBuscar.classList.remove('ativar')
})


