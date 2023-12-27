function getElementValue(elementId) {
    return document.getElementById(elementId).value.trim().toLowerCase();
}

function displayErrorMessage(message) {
    var loginResult = document.getElementById('loginResult');
    loginResult.innerHTML = message;
    loginResult.style.color = '#FF0000';
}

function hideErrorMessage() {
    var loginResult = document.getElementById('loginResult');
    loginResult.innerHTML = '';
}

function isValidUsername(username) {
    return /^[a-zA-Z0-9]+$/.test(username);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function realizarCadastro() {
    hideErrorMessage();

    var tipoCadastro = getElementValue('tipoCadastroCadastro');
    var cadastroUsername = getElementValue('cadastroUsername');
    var cadastroPassword = getElementValue('cadastroPassword');

    if (!isValidUsername(cadastroUsername)) {
        displayErrorMessage('Usuário inválido. Utilize apenas letras e números.');
        return;
    }

    if (!isValidPassword(cadastroPassword)) {
        displayErrorMessage('Senha inválida. Deve conter no mínimo 6 caracteres.');
        return;
    }

    if (cadastroUsername && cadastroPassword) {
        try {
            var usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || {};

            if (usuariosCadastrados[cadastroUsername]) {
                displayErrorMessage('Usuário já cadastrado. Por favor, escolha outro nome de usuário.');
            } else {
                usuariosCadastrados[cadastroUsername] = {
                    tipoCadastro: tipoCadastro,
                    senha: cadastroPassword
                };

                localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados));

                var successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.style.display = 'block';
                }

                document.getElementById('cadastroUsername').value = '';
                document.getElementById('cadastroPassword').value = '';
            }
        } catch (error) {
            console.error('Erro ao processar o cadastro:', error);
            displayErrorMessage('Ocorreu um erro ao processar o cadastro. Por favor, tente novamente.');
        }
    } else {
        displayErrorMessage('Por favor, preencha todos os campos para cadastrar-se.');
    }
}

function realizarLogin() {
    hideErrorMessage();

    var tipoCadastroLogin = getElementValue('tipoCadastroLogin');
    var username = getElementValue('username');
    var password = getElementValue('password');

    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || {};

    if (!isValidUsername(username)) {
        displayErrorMessage('Usuário inválido. Utilize apenas letras e números.');
        return;
    }

    if (!isValidPassword(password)) {
        displayErrorMessage('Senha inválida. Deve conter no mínimo 6 caracteres.');
        return;
    }

    if (usuariosCadastrados[username] && usuariosCadastrados[username].senha === password) {
        if (usuariosCadastrados[username].tipoCadastro === tipoCadastroLogin) {
            if (tipoCadastroLogin === 'estudante') {
                window.location.href = 'telaEstudante.html';
            } else if (tipoCadastroLogin === 'professor') {
                window.location.href = 'telaProfessor.html';
            }
        } else {
            displayErrorMessage('Tipo de cadastro incorreto. Por favor, verifique e tente novamente.');
        }
    } else {
        displayErrorMessage('Credenciais inválidas. Tente novamente.');
    }
}

function voltarParaLogin() {
    hideErrorMessage();
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('cadastroUsername').value = '';
    document.getElementById('cadastroPassword').value = '';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('cadastroForm').style.display = 'none';
    document.getElementById('loginButton').style.display = 'block';
    document.getElementById('cadastroButton').style.display = 'block';
}

function mostrarForm(formId) {
    hideErrorMessage();
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    var loginForm = document.getElementById('loginForm');
    var cadastroForm = document.getElementById('cadastroForm');
    var loginButton = document.getElementById('loginButton');
    var cadastroButton = document.getElementById('cadastroButton');

    if (formId === 'loginForm') {
        loginForm.style.display = 'block';
        cadastroForm.style.display = 'none';
        loginButton.style.display = 'none';
        cadastroButton.style.display = 'block';
    } else if (formId === 'cadastroForm') {
        loginForm.style.display = 'none';
        cadastroForm.style.display = 'block';
        loginButton.style.display = 'block';
        cadastroButton.style.display = 'none';
    }
}