
function validar(cadena)
{
  var patron=/[0-9]{3,}/;
  var Resultado="";
  if (patron.test(cadena))
    //document.writeln(cadena);
    Resultado="Cantidad de dígitos correcto";
  else
    Resultado="Cantidad de dígitos incorrecto";
    //document.writeln("Cantidad de dígitos incorrecto");
  document.getElementById("blanco").innerHTML
        = Resultado; 

}

