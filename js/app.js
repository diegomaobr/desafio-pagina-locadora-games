function alterarStatus(id) {
    // aplica as varaiveis com as classes do HTML
    let gameClicado = document.getElementById(`game-${id}`); 
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    // uma classe pode ser compartilhada e o id nao
    // classlist.contais(informa a classe que esteja)
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
