function aleatorio(){
	// Tener en cuenta que la posicion 0 es 1
	var minimo = 0, maximo = 19, num;
	var arreglo = [];

	do{
		num = Math.round(Math.random() * (maximo - minimo) + minimo);

		if(arreglo.indexOf(num) == -1){	// Para verificar que la imagen no aleatoria se repita
			arreglo.push(num);
		}

	}while(arreglo.length != 8);	//	Se repita la condicion hasta tener las 8 imagenes aleatorias

	return arreglo;
}

var alazar = aleatorio();

document.getElementById("cover1").innerHTML = '<img src="'+ ps3Juegos[aleatorio[0]][1] +'" >';
document.getElementById("cover2").innerHTML = '<img src="'+ ps3Juegos[alazar[1]][1] +'" >';
document.getElementById("cover3").innerHTML = '<img src="'+ ps3Juegos[alazar[2]][1] +'" >';
document.getElementById("cover4").innerHTML = '<img src="'+ ps3Juegos[alazar[3]][1] +'" >';

document.getElementById("cover5").innerHTML = '<img src="'+ ps3Juegos[alazar[4]][1] +'" >';
document.getElementById("cover6").innerHTML = '<img src="'+ ps3Juegos[alazar[5]][1] +'" >';
document.getElementById("cover7").innerHTML = '<img src="'+ ps3Juegos[alazar[6]][1] +'" >';
document.getElementById("cover8").innerHTML = '<img src="'+ ps3Juegos[alazar[7]][1] +'" >';