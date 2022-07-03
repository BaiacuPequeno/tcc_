let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


/* coleta o input do nome */
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false
console.log(nome, labelNome, validNome)
/* ----------------------------------- */

/* coleta o input do nome de usuario */
let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false
console.log(usuario, labelUsuario, validUsuario)


/* coleta o input da senha */
let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false
console.log(senha, labelSenha, validSenha)


/* coleta o input da confirmação da senha */
let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  /* verifica o tamanho do nome, caso tenha menos de 3 digitos, mostra um erro */
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
  /* -------------------------------- */
})

usuario.addEventListener('keyup', () => {
  /* verifica o tamanho do nome de usuário, caso tenha menos de 3 digitos, mostra um erro */
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
  /* ----------------------------- */
})

senha.addEventListener('keyup', () => {
  /* verifica o tamanho da senha, caso tenha menos de 5 digitos, mostra um erro */
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
  /* ----------------------------------------- */
})

confirmSenha.addEventListener('keyup', () => {
  /* verifica se a confirmação da senha é igual a senha, se nao for, mostra um erro */
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
  /* --------------------------------------- */
})


/* começa a função de cadastro */
function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    /* pega as informações em cada campo */
    listaUser.push(
      {
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value
      }
    )

    /* transforma os valores da lista em strings*/
    localStorage.setItem('listaUser', JSON.stringify(listaUser))


    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Carregando...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    /* timer pro redirecionamento */
    setTimeout(() => {
      alert("Obrigado pela sua doação :)")
      window.location.href = './index.html'
    }, 3000)


  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})