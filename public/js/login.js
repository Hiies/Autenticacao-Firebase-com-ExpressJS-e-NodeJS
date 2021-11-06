
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.replace("welcome.html")
    }
  })
  function login_btn() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if ((email == "" || email == null) || (password == '' || email == null)) {
      document.getElementById('span_email').innerHTML = "Preencha todos os campos"
      document.getElementById('span_pass').innerHTML = "Preencha todos os campos"
      return
    }
    else if (expression.test(email) == false) {
      alert("Por favor, preencha um e-mail valido")
      return
    }
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
  
     })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/invalid-email':
            return alert('O endereço de e-mail não é válido.');
        case 'auth/wrong-password':
            return alert('Senha incorreta.');
      }

    });
  }

  function cadastrar() {
    location.replace("./cadastrar.html")
  }
  function recu_pass() {
    alert("funcionando")
  }