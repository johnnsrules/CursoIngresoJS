/* Ejercicio 10
una agencia de viajes no pide informar si hacemos viajes a lugares según la estación del año
donde estemos, informar:
si "Se viaja" o "No se viaja" a ese lugar.

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

Gonzalo Reynoso*/

function mostrar()
{
	let destinoIngresado;
	let estacionDelAñoIngresada;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;
	estacionDelAñoIngresada=document.getElementById("txtIdEstacion").value;
	
	switch(estacionDelAñoIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			} 
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			} 
			break;

		case "Otoño":
			switch(destinoIngresado)
			{
				default:
					mensaje="Se viaja";
				break;
			} 
			break;

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="No se viaja";
				break;
				default:
					mensaje="Se viaja";
				break;
			} 
			break;
	}
	

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
