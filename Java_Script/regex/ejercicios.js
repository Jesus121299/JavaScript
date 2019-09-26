//1
console.log("\n EJERCICIO 1. \t \n el murcielago no esta disponible en la madrugada\n");
let ejercicio1 = "el murcielago no esta disponible en la madrugada";
console.log("RESULTADO: ");
let newejercicio1 = ejercicio1.replace(/[a-z]{7,}/g, "");
console.log(newejercicio1);


//2
console.log("\n EJERCICIO 2. \t \n lynx\n");
let ejercicio2 = /["aeiou"]$/;
console.log("RESULTADO: ");
console.log(ejercicio2.test("lynx"));


//3
console.log("\n EJERCICIO 3. \t \n mnx\n");
let ejercicio3 = /[m,M][^"aeiou"]/;
console.log("RESULTADO: ");
console.log(ejercicio3.test("mnx"));


//4
console.log("\n EJERCICIO 4. \t \nel perro 'es' flojo \n");
let ejercicio4 = /(["'])/;
console.log("RESULTADO: ");
console.log(ejercicio4.test("el perro 'es' flojo"));


//5
console.log("\n EJERCICIO 5. \t \n direccion ip es 192.168.1.4 \n");
let ejercicio5 = /(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/;
console.log("RESULTADO: ");
console.log(ejercicio5.test(" direccion ip es 192.168.1.4"));


//6
console.log("\n EJERCICIO 6. \t \n la hora es 05:20:09 \n");
let ejercicio6 = /\d+[:]\d+[:]/;
console.log("RESULTADO: ");
console.log(ejercicio6.test("\n la hora es 05:20:09"));


//7
console.log("\n EJERCICIO 7. \t \n my telephone number is 984-205-63-01 \n");
let ejercicio7= /\d\d\d+[-|" "]\d\d\d+[-|" "]\d\d+[-|" "]\d\d/;
console.log("RESULTADO: ");
console.log(ejercicio7.test("\nmy telephone number is 984-205-63-01"));


//8
//\S — Representa cualquier carácter que no sea un espacio en blanco.
console.log("\n EJERCICIO 8. correo es: jess12@hotmail.comx\n");
let ejercicio8= /\S+([-]?\S+)@+[a-z]+([.])+[a-z]/;
console.log("RESULTADO: ");
console.log(ejercicio8.test("correo es: jess12-@hotmail.comx"));

//[A-Z][a-z]+/g
//9
let ejercicio9 = /(http|https|www)/;
console.log("\n EJERCICIO 9. \t la direccióm puede ser http://moodle.valladolid.tecnm.mx/mod/assign/view.php?id=2815\n");
console.log("RESULTADO: ");
console.log(ejercicio9.test("la direccióm puede ser http://moodle.valladolid.tecnm.mx/mod/assign/view.php?id=2815" ));


//10
let ejercicio10 = /[0-9]{5}/;
console.log("\n EjERCICIO 10. \t Codigo postal de sisal es 97784 \n");
console.log("RESULTADO: ");
console.log(ejercicio10.test("Codigo postal de sisal es 97784"));
