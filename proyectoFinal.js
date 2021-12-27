/**
 * @challenge: Simulador interactivo
 * Calcular pagos en cuotas sobre un monto determinado.
 * 
 * @version: v1.1.1
 * @author: Iván Oishi
 * @fecha: 26/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 *  - v1.0.1 - Modificacion para saber en cuantas cuotas tiene que pagar
 *  - v1.1.0 - Agregando Objetos
 *  - v1.1.1 - Mejore el displayPhone y la salidad de "mostrar"
 *  - v1.1.2 - Ahora el usuario puede saber en cuantas cuotas tiene que pagar por mes
 */

// Código
class Product {
     constructor (phone,model,price) {
          this.phone = phone;
          this.model = model;
          this.price = price;
     }
     displayPhone = function(){
          let result = `Usted quiere el ${this.phone} ${this.model} al precio de ${this.price}`;
          console.log (result)
     }
}
let phone = prompt("Que marca de celular querés?");
let model = prompt ("Modelo?");
let price = prompt("Cuánto cuesta?");

let product = new Product (phone,model,price);
console.log (product)


let formaPago = prompt("Lo abonas en Cuotas o al Contado?");
if (formaPago == 'cuotas' || formaPago == 'Cuotas' || formaPago == 'CUOTAS' || formaPago == 'cuota' || formaPago == 'Cuota' || formaPago == 'CUOTA'){

     let segundoNumero = parseInt (prompt("En cuantas cuotas lo vas a abonar?"));
     let resultado = 0;
     
     function dividir (price, segundoNumero) {
          resultado = price / segundoNumero;
     }
     
     function mostrar (mensaje) {
          console.log (mensaje);
          document.getElementById("totalP").innerHTML = mensaje;
     }

     dividir (price, segundoNumero);
     mostrar (`Tenés que pagar $ ${resultado} en ${segundoNumero} cuotas por mes`);
     
}else{
     let porcentaje = 0.15;
     let restotal = 0
     function descuento (price,porcentaje){
          restotal = price - price*porcentaje;
          console.log();
     }

     function mostrar (mensaje) {
          console.log (mensaje);
          document.getElementById("totalP").innerHTML = mensaje;
     }

     descuento (price,porcentaje);
     mostrar (`Por pagar en efectivo te llevás un 15% siendo el monto a pagar de: ${restotal}`);
}

document.getElementById("phone").innerHTML = product.phone;
document.getElementById("model").innerHTML = product.model;
document.getElementById("price").innerHTML =  product.price;








