function iniciarSesion(){
  if(document.getElementById("elusuario").validity.valid){
    if(document.getElementById("elpassword").validity.valid){
      var usuario = document.getElementById("elusuario").value;
      var password = document.getElementById("elpassword").value;
      if(usuario=="admin" && password=="secreto"){
        alert("Bienvenido "+ usuario);
        location.replace("index.html");
      }else{
        alert("El usuario o password no es correcto");
      }
    }
  }
}
