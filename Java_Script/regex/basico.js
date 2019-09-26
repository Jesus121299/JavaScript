let re1 = new RegExp("abc");
let re2 = /[0-9]/;

result = re1.test("abc");//true
console.log(result);
result = re2.test("aniversario en 1985"); // es ture por qué tiene digitos 
console.log(result);//true

//let re3 = /\d+-\d+-\d+/; así solo acepta como separador el guión -, si se pone / no lo cepta
let re3 = /\d+[-|/]\d+[-|/]\d+/;//acepta las dos formas de separador - o /
console.log(re3.test("13/7/1991"));//true
console.log(re3.test("18-06-1999"));//true

let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

let re6 = /["aeiou"]/;//este caso determina si existe una vocal, en caso contrario [aeiou] lo determina como cadena completa
console.log(re6.test("lynx"));

//Reemplaza todas las vocales en la palabra correcaminos
let mensaje = "perro";
let newMensaje = mensaje.replace(/[aeiou]/g,"+");
console.log(newMensaje);
/* el $ sirve para cambiar el ultimo lugar 
el g es para cambiar en toda la cadena, y ^ significa negación

las llaves {} significa longitud
*/

let mensaje2 = "el 20 de enero de 2019 se dio inicio a la 3 semana";
let newMensaje2 = mensaje2.replace(/[a-z]{5,}/g, "");
console.log(newMensaje2);


var historia = "De forma similar que los corchetes, los paréntesis \
sirven para agrupar caracteres, sin embargo existen varias diferencias\
fundamentales entre los grupos establecidos por medio de corchetes y los \
grupos establecidos por paréntesis ";
var expresion = /[A-Z][a-z]+/g
///[A-Z][^aeiou][a-z]+/g
result = historia.match(expresion);
console.log (result);
