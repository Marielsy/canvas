var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0 ;
var yi , xf;
var colorcito = "blue";

//otro comentario victor
 for (l=0; l < lineas ; l++)
 {
   yi = 10 * l;
   xf = 10 * ( l + 1);
   dibujarLinea(colorcito, 0, yi, xf, 300);
   console.log( "linea" + l);

 }

  dibujarLinea(colorcito, 2, 2, 2, 300);
  dibujarLinea(colorcito, 2, 299, 299, 299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//Comentario de Victor. 
//Esto es una prueba
