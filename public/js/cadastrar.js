function voltar() {
  location.replace('./login.html')
}

function criar_conta() {
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    alert('Conta criada')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}
