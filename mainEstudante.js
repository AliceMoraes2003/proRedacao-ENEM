function selecionarAno(ano) {
    localStorage.setItem('anoSelecionado', ano);
    
    const tituloRedacao = "Título da Redação";
    const conteudoRedacao = "Conteúdo da Redação";
    localStorage.setItem('tituloRedacao', tituloRedacao);
    localStorage.setItem('conteudoRedacao', conteudoRedacao);

    window.location.href = `${ano}.html`;
}