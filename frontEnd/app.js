// LOGIN

// Instancia proveedor del servicio (Quién hace el login)
var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
      firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                  console.log(result.user);
                  $('#login').hide(); // ESCONDEMOS HIDE
                  $('#root').append("<img  src='" + result.user.photoURL + "' />"); // AGREGAMOS HTML A UNA ETIQUETA
            });

});
