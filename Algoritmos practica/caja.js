//ejercicio de caja (sugerido por gemini)

var cajero = "Juli";
var montoInicial = 10000;
var ventasTotales = 0;
var estadoCaja = "ABIERTA";

ventasTotales = ventasTotales + 2500;
ventasTotales += 3200;                
ventasTotales += 1800;               

if (ventasTotales > 5000) {
    var bono = 1500;
    estadoCaja = "CERRADA CON OBJETIVO CUMPLIDO";
}

var saldoFinal = montoInicial + ventasTotales + bono;

console.log("=== REPORTE DE CIERRE DE CAJA ===");
console.log("Cajero: " + cajero);
console.log("Estado: " + estadoCaja);
console.log("Monto inicial: $" + montoInicial);
console.log("Ventas totales: $" + ventasTotales);
console.log("Bono aplicado: $" + bono);
console.log("Saldo final en caja: $" + saldoFinal);