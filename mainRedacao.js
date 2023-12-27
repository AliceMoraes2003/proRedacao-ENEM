// Obter o ano selecionado do localStorage
const anoSelecionado = localStorage.getItem('anoSelecionado');

// Adicione o restante do seu código abaixo
document.getElementById('enviarRedacao').addEventListener('click', function() {
    const redacao = document.getElementById('redacao').value;

    if (redacao.trim() !== "") {
        // Salvar redação no localStorage
        const redacoesEnviadas = JSON.parse(localStorage.getItem('redacoesEnviadas')) || [];
        redacoesEnviadas.push({ titulo: `ENEM ${anoSelecionado}`, conteudo: redacao });
        localStorage.setItem('redacoesEnviadas', JSON.stringify(redacoesEnviadas));

        // Limpar campo
        document.getElementById('redacao').value = "";

        // Mostrar mensagem de sucesso
        alert('Redação enviada com sucesso!');
    } else {
        alert('Por favor, escreva sua redação antes de enviar.');
    }
});


document.getElementById('voltarParaEstudante').addEventListener('click', function() {
    const redacao = document.getElementById('redacao').value;

    if (redacao.trim() !== "") {
        // Alerta de confirmação antes de voltar
        const confirmacao = confirm('Tem certeza que deseja voltar? Isso apagará o conteúdo da sua redação.');

        if (confirmacao) {
            // Limpa o conteúdo do textarea
            document.getElementById('redacao').value = "";
            // Volta para a tela de estudante
            window.location.href = 'telaEstudante.html';
        }
    } else {
        // Se não há redação, volta diretamente para a tela de estudante
        window.location.href = 'telaEstudante.html';
    }
});