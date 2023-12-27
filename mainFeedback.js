document.addEventListener('DOMContentLoaded', function() {
    const redacaoSelecionada = JSON.parse(localStorage.getItem('redacaoComFeedback')) || {};
    const tituloRedacao = document.getElementById('tituloRedacao');
    const conteudoRedacao = document.getElementById('conteudoRedacao');
    const notaProfessor = document.getElementById('notaProfessor');
    const comentarioProfessor = document.getElementById('comentarioProfessor');

    tituloRedacao.textContent = `ENEM ${redacaoSelecionada.anoSelecionado || localStorage.getItem('anoSelecionado')}`;
    conteudoRedacao.textContent = redacaoSelecionada.conteudo || '';
    notaProfessor.textContent = `Nota do Professor: ${redacaoSelecionada.nota || 'Ainda não avaliada'}`;
    comentarioProfessor.textContent = `Comentário do Professor: ${redacaoSelecionada.comentario || 'Ainda não avaliado'}`;

    //botão para voltar
     document.getElementById('voltarParaTela').addEventListener('click', function() {
        window.location.href = 'telaRedacoesEnviadas.html';
    });
});
