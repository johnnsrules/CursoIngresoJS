/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO" 

function mostrarAumento()
{
	let importe;
	let importeConDescuento;
    let mensaje;

    importe = document.getElementById("txtIdImporte").value;
        importe= parseInt(importe); 

    importeConDescuento = importe-(importe*25/100);

    mensaje=("El importe con un descuento del 25% es " + importeConDescuento);

    document.getElementById("txtIdResultado").value = mensaje;

    

}
/*
10 bis
en el ejercicio 10 e/s
lo anterior mas
se debe pedir el % por prompt

*/


function mostrarAumento()

{
	let importe;
	let importeConDescuento;
    let mensaje;
    let descuentoDelPrompt;
    let porcentaje;

    importe = document.getElementById("txtIdImporte").value;
    importe= parseInt(importe); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
    descuentoDelPrompt= prompt("Coloque su descuento aqui");
    porcentaje= importe*descuentoDelPrompt/100;
    importeConDescuento= importe-porcentaje;

    mensaje=("El importe con el descuento seleccionado es " + importeConDescuento);

    document.getElementById("txtIdResultado").value = mensaje;


/*
    1. Sueldo = document.get...
2. Descuento = prompt
3. Porcentaje =  sueldo * descuento / 100
4. sueldoDescontado = sueldo - porcentaje
*/

    }

    //Gonzalo Reynoso

    