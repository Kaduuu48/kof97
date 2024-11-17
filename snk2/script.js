function abrirModal(modalId){
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}
function fecharModal(modalId){
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const cards = document.querySelectorAll('.imagem');

function pesquisarCards() {
    const searchValue = searchInput.value.toLowerCase();
    let resultadoEncontrado = false;

    cards.forEach(card => {
        const nome = card.querySelector('h2').textContent.toLowerCase();
        if (nome.includes(searchValue)) {
            card.style.display = 'block';
            resultadoEncontrado = true;
        } else {
            card.style.display = 'none';
        }
    });

    const mensagemErro = document.getElementById('mensagem-erro');
    if (resultadoEncontrado) {
        mensagemErro.style.display = 'none';
    } else {
        mensagemErro.style.display = 'block';
    }
}


// Evento ao clicar na lupinha
searchButton.addEventListener('click', pesquisarCards);

function mostrarTodosCards() {
    cards.forEach(card => {
        card.style.display = 'block';
    });
    searchInput.value = ''; // Limpa o campo de pesquisa

    // Esconde a mensagem de erro
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.style.display = 'none';
}

  const botaoVoltar = document.getElementById('botao-voltar');

// Evento ao clicar no botão "Voltar"
botaoVoltar.addEventListener('click', mostrarTodosCards);