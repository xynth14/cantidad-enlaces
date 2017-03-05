var arr = [0,1,2,3,4,5,6,7,8];

function listarBotones(){
	var button = "";
	arr.map(function(e){
		button += '<button class="btn" type="button" id="' + e + '"></button>';
	});

	document.getElementById("tablero").innerHTML= button;
}

listarBotones();

function Constructor(id){
this.id = id;
}

var arrMarcado = [];
var turno = document.getElementById("turno").value;
arr.map(function(e){
	var btn = document.getElementsByClassName("btn")[e];
	btn.onclick = function(){
		//alert(e);
		if(turno == "X"){
			var marcar = new Constructor("X");
			arrMarcado.push(marcar);
			turno = "O";
			document.getElementById("turno").value = turno;
			btn.innerHTML = turno;
		}else{
			var marcar = new Constructor("O");
			arrMarcado.push(marcar);
			turno = "X";
			document.getElementById("turno").value = turno;
			btn.innerHTML = turno;
		}
		
	}
});