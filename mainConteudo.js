document.addEventListener('DOMContentLoaded', function() {
    const redacaoSelecionada = JSON.parse(localStorage.getItem('redacaoSelecionada')) || {};
    const tituloRedacao = document.getElementById('tituloRedacao');
    const conteudoRedacao = document.getElementById('conteudoRedacao');
    const notaRedacao = document.getElementById('notaRedacao');
    const comentarioProfessor = document.getElementById('comentarioProfessor');

    tituloRedacao.textContent = `ENEM ${redacaoSelecionada.anoSelecionado || localStorage.getItem('anoSelecionado')}`;
    conteudoRedacao.textContent = redacaoSelecionada.conteudo || '';

    window.enviarFeedback = function() {
        const nota = notaRedacao.value.trim();
        const comentario = comentarioProfessor.value.trim();
    
        if (nota && comentario) {
            // Adicione feedback ao localStorage
            const feedback = {
                nota: nota,
                comentario: comentario
            };
    
            const redacoesComFeedback = JSON.parse(localStorage.getItem('redacoesComFeedback')) || [];
            redacoesComFeedback.push({
                anoSelecionado: redacaoSelecionada.anoSelecionado,
                feedback: feedback
            });
            localStorage.setItem('redacoesComFeedback', JSON.stringify(redacoesComFeedback));
    
            alert('Feedback enviado com sucesso!');
    
            // Limpe apenas a nota e o comentário após o feedback ser enviado
            notaRedacao.value = '';
            comentarioProfessor.value = '';
        } else {
            alert('Por favor, digite a nota e o comentário antes de enviar.');
        }
    };
    
    // Adicione o evento de clique ao botão dentro da função de carregamento do DOM
    document.getElementById('voltarParaTela').addEventListener('click', function() {
        window.location.href = 'telaProfessor.html';
    });
});