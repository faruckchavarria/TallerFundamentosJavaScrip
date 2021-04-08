function iniciarCarro(idCarro)
{ 
   let mensaje = 'Iniciando...';
} 
iniciarCarro(123);
console.log(mensaje); 
//==========================================


function iniciarCarro(idCarro){ 
   let mensaje = 'Iniciando...';
   let iniciarFn = function iniciarCarro(){
       let mensaje = 'Reemplazando'; 
   };
   iniciarFnfunction iniciarCarro(idCarro)
{ 
   let mensaje = 'Iniciando...';
} 
iniciarCarro(123);
console.log(mensaje); 
//==========================================


function iniciarCarro(idCarro){ 
   let mensaje = 'Iniciando...';
   let iniciarFn = function iniciarCarro(){
       let mensaje = 'Reemplazando'; 
   };
   iniciarFn();
   console.log(mensaje); // ‘Iniciando’
} 
iniciarCarro(123);
