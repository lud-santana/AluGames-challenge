function alterarStatus(id)
{ 
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
    let botao = jogoClicado.querySelector('.dashboard__item__button')

    alert(nomeJogo.textContent);
}