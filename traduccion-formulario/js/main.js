function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var clave = document.getElementById("inputPassword");

	var renombrar = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesion";
	email.placeholder = "Por favor ingresa tu correo";
	clave.placeholder = "Contraseña";
	renombrar.innerHTML = "Recordarme";
	button.innerHTML = "Iniciar Sesion";

	button.onclick = function(){
		var mostrar = document.getElementById("mostrar");
		mostrar.innerHTML = "<h2>Datos de Formulario</h2>" + 
							"<div class='espacio'>El correo electrónico ingresado es:</div>" + 
							"<div class='espacio'>" + email.value + "</div>" + 
							"<div class='espacio'>La clave ingresada es:</div>" + 
							"<div class='espacio'>" + clave.value + "</div>";
	}
}


translate();



