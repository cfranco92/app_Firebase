// LOGIN

// Instancia proveedor del servicio (Quién hace el login)
var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
      firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                  console.log(result.user);
            });
            
});
