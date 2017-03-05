function sumarDosNumeros(){
	test(9,suma(4,5));
	test(-8,suma(-18,10));
	test(1234,suma(1000,234));
}

function sumaDosString(){
	test(9,suma("4","5"));
	test(4,suma("2","2"));
	test(10,suma("5","5"));
}

function sumaUnNumero(){
	test(5,suma(5));
	test(10,suma(10));
	test(10,suma("10"));
}

function alMenosUnParametro(){
	test(null, suma());
}

function ingresoLetras(){
	test(null,suma("a","b"));
}

function test(expected, result){
	if(expected === result){
		console.log("Verde");
	}else{
		console.log("Rojo");
	}
}

function testAll(){
	sumarDosNumeros();
}

//Ejecuta Todo
testAll();