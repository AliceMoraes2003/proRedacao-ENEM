const anoSelecionado = localStorage.getItem('anoSelecionado');

document.addEventListener('DOMContentLoaded', function() {
    const redacoesEnviadas = JSON.parse(localStorage.getItem('redacoesEnviadas')) || [];
    const redacoesContainer = document.getElementById('redacoesContainer');

    redacoesEnviadas.forEach(function(redacao, index) {
        const redacaoDiv = document.createElement('div');
        redacaoDiv.textContent = `${redacao.titulo || anoSelecionado}`;
        redacaoDiv.className = 'redacao-div';

        const viewButton = document.createElement('viewButton');
        viewButton.textContent = 'Visualizar Redação';
        viewButton.addEventListener('click', function() {
            localStorage.setItem('redacaoEnviadas', JSON.stringify(redacao));
            window.location.href = 'telaConteudo.html';
        });

        const deleteButton = document.createElement('deleteButton');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();

            const confirmacao = confirm('Tem certeza de que deseja excluir esta redação?');
            if (confirmacao) {
                redacoesEnviadas.splice(index, 1);
                localStorage.setItem('redacoesEnviadas', JSON.stringify(redacoesEnviadas));
                redacaoDiv.remove();
            }
        });

        redacaoDiv.appendChild(viewButton);
        redacaoDiv.appendChild(deleteButton);
        redacoesContainer.appendChild(redacaoDiv);
    });
});
