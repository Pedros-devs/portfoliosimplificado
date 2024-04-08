
// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostral mais no JS para poder verificar quando o usuário clicar em cima dele
//Passo 2 - Identificar o clique do botão

const btnMostrarProjects = document.querySelector('.btn-mostrar-projects');
const projectsinativos = document.querySelectorAll('.projeto:not(.ativo)')

btnMostrarProjects.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});
function esconderBotao() {
    btnMostrarProjects.classList.add('remover');
}

function mostrarMaisProjetos() {
    projectsinativos.forEach(projectinativo => {
        projectinativo.classList.add('ativo');
    });
}

