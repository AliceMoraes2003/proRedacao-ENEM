const anoSelecionado = localStorage.getItem('anoSelecionado');

document.addEventListener('DOMContentLoaded', function() {
    const redacoesEnviadas = JSON.parse(localStorage.getItem('redacoesEnviadas')) || [];
    const feedbackContainer = document.getElementById('redacoesEnviadasContainer');

    redacoesEnviadas.forEach(function(redacao, index) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.textContent = `${redacao.titulo || anoSelecionado}`;;
        feedbackDiv.className = 'redacao-div';
        
        const viewButton = document.createElement('viewButton');
        viewButton.textContent = 'Visualizar Feedback';
        viewButton.addEventListener('click', function() {
            localStorage.setItem('redacaoSelecionada', JSON.stringify({
                anoSelecionado: redacao.anoSelecionado,
                conteudo: redacao.conteudo,
                nota: redacao.nota,
                comentario: redacao.comentario
            }));
            window.location.href = 'telaFeedback.html';
        });


        const deleteButton = document.createElement('deleteButton');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();

            const confirmacao = confirm('Tem certeza de que deseja excluir esta redação?');
            if (confirmacao) {
                redacoesEnviadas.splice(index, 1);
                localStorage.setItem('redacoesEnviadas', JSON.stringify(redacoesEnviadas));
                feedbackDiv.remove();
            }
        });

        feedbackDiv.appendChild(viewButton);
        feedbackDiv.appendChild(deleteButton);
        feedbackContainer.appendChild(feedbackDiv);
    });
});