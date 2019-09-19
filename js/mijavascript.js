let numero = parseInt(prompt("digite un numero"));

// 
// if (numero % 2 ==0){
//     document.write("<h1>"+numero+" Es un numero par</h1>");

// } else {
//     document.write("<h3>"+numero +" Es un numero impar</h3>");
// }
// if (numero>0){
//     document.write("El numero es positivo");
// }else if (numero<0){
//     document.write("El numero es negativo");
// } else {
//     document.write("El numero es 0");
// }

// if (numero>0){
//     document.write("<p class='parraf'>"+numero+" El numero es positivo</p>");
//     if (numero % 2==0){
//         document.write("<a href='#'>"+numero+" El numero es par</a>");
//     }else{
//     document.write("<p>"+numero+" El numero es impar</p>");
// }


// }else if (numero<0){
//     document.write("<p>"+numero+" El numero es negativo</p>");
// if (numero %2 ==0){
//     document.write("<p>"+numero+" El numero es par</p>");
// }else {
//     document.write("<p>"+numero+" El numero es negativo</p>");
//     document.write("<p>"+numero+" El numero es impar</p>");
// }

// }

// for (var i=0; i<=10; i++) {
//     document.write("<h1>"+numero*i+"</h1>");
//     var nombre="Juan";

// }
// document.write(nombre);

// for (let i = 0; i <=10; i++) {
//     document.write("<h1>"+numero*i+"</h1>");
//     es_par = i %2==0 ? "Si" : "No";
//     document.write(es_par);
// } 
// for (let i = 0; i <=10; i++) {
//     document.write("<h1>"+numero*i+"</h1>");
//     es_par = i %2==0 ? true : false;
//     document.write(es_par);
// } 

// let num=0;
// for (let i = 0; i <=10; i++) {
//     document.write("<h1>"+numero*i+"</h1>");
//     es_par = i %2==0 ? num=i*numero : num=i*numero;
//     document.write(es_par);
// } 
let miarray =[];
document.write("<p>Tamaño array inicial: "+ miarray.length+"</p>");

miarray.push("asdf");
miarray.push(true);
miarray.push(5.2);
document.write("<p>"+miarray[0]+"</p>");
document.write("<p>"+miarray[1]+"</p>");
document.write("<p>"+miarray[2]+"</p>");
document.write("<p>Tamaño array final: "+miarray.length+"</p>");

for (let index = 0; index < miarray.length; index++) {
    document.write("<p>"+miarray[index]+"</p>");
}