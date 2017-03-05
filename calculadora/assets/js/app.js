function suma(a,b){
	 
	 if(a == undefined && b == undefined){
	 	return false;
	 }

	var a1 = parseInt(a);
	var b1 = parseInt(b);

	if(a1 == undefined){ a1 = 0; } 
	if(b1 == undefined){ b1 = 0; }

	if( !isNaN(a1) && !isNaN(b1) ){
		return a1 + b1;
	}else{
		return null;
	}

}