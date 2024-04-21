function ver(valor)
     {
         var nume = parseInt(valor);
         var i=1;
         while(i<=12)
         {
             document.write(i + '*' + nume + "=" + i * nume+"<br>");
             i++;
         }
     }

function ver2(valor)
     {
         var nume = parseInt(valor);
         var i=1;
         document.write("Tabla de multiplicar del "+nume+"<br>");

         while(i<=12)
         {
             document.write(i + '*' + nume + "=" + i * nume+"<br>");
             i++;
         }
     }

