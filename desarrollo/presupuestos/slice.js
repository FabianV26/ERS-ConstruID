var pep = "Pep 210000-20-C / Aceras, Brocales";
 //cad.slice(-3);     // retorna 'ma.'
 //cad.slice(-3, -1); // retorna 'ma'
var adaptarDireccionPep = pep.slice(0, 15);  // retorna 'La mañana se nos echa encima'
var direcExtracto1 = adaptarDireccionPep.slice(0, 6);
var direcExtracto2 = adaptarDireccionPep.slice(-5);

var direccionPep = direcExtracto1 + "X" + direcExtracto2;

console.log(adaptarDireccionPep);
console.log(direccionPep);

var cuenta = "Brocales / 5061008000";
var direccionCuenta = cuenta.slice(0, -13);

console.log(direccionCuenta);