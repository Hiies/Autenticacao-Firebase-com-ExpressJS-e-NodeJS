function deslogar(){
  firebase.auth().signOut().then(() => {
      location.replace("login.html")
    }).catch((error) => {
      alert("erro")
    });
}