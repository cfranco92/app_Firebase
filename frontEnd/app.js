// LOGIN

// Instancia proveedor del servicio (Quién hace el login)
var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
      firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                  console.log(result.user);
                  guardaDatos(result.user);
                  $('#login').hide(); // ESCONDEMOS HIDE
                  $('#root').append("<img  src='" + result.user.photoURL + "' />"); // AGREGAMOS HTML A UNA ETIQUETA
            });

});

// GUARDAR USUARIO AUTOMATICAMENTE
function guardaDatos(user){
  var usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL
  }
  firebase.database().ref("usuarios/" + user.uid)
    .set(usuario)
    // .push(usuario);
}

// ESCRIBIR EN LA BASE DE DATOS
$('#guardar').click(function(){
  firebase.database().ref("telmex")  //RAMA
    .set({ //Escribo en la base de datos
        nombre:"Bliss",
        edad:"15",
        sexo:"Masculino"
    })
});


// LEEMOS DE LA BASE DE DATOS
firebase.database().ref("usuarios")
  .on("child_added", function(s){ // SI SE AGREGA UNA NUEVA RAMA A USUARIOS
    var user = s.val();
    $('#root').append("<img  src='" + user.foto + "' />"); // AGREGAMOS HTML A UNA ETIQUETA    
  })
