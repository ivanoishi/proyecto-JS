/**
 * @challenge: Simulador interactivo
 * Calcular pagos en cuotas sobre un monto determinado.
 * 
 * @version: v1.1.1
 * @author: Iván Oishi
 * @fecha: 2/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 *  - v1.0.1 - Modificacion para saber en cuantas cuotas tiene que pagar
 *  - v1.1.0 - Agregando Objetos
 *  - v1.1.1 - Mejore el displayPhone y la salidad de "mostrar"
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
let phone = prompt("Que celular queres?");
let model = prompt ("Modelo?");
let price = prompt("Cuanto cuesta?");

let product = new Product (phone,model,price);
console.log (product)


let formaPago = prompt("lo abonas en Cuotas o Efectivo?");
if (formaPago == 'cuotas' || formaPago == 'Cuotas' || formaPago == 'CUOTAS' || formaPago == 'cuota' || formaPago == 'Cuota' || formaPago == 'CUOTA'){

     let segundoNumero = parseInt (prompt("En cuantas cuotas lo vas a abonar?"));
     let resultado = 0;
     
     function dividir (price, segundoNumero) {
          resultado = price / segundoNumero;
     }
     
     function mostrar (mensaje) {
          console.log (mensaje);
     }

     dividir (price, segundoNumero);
     //mostrar ('Tenes que pagar $' + resultado + ' en ' + segundoNumero + ' cuotas por mes');
     mostrar (`Tenes que pagar $ ${resultado} en ${segundoNumero} cuotas por mes`) /* Me gustria mostrarlo en HTML pero no se como hacerlo una variable */
     
}else{
    console.log("Pagarias en efectivo $" + price);
}

document.getElementById("phone").innerHTML = product.phone;
document.getElementById("model").innerHTML = product.model;
document.getElementById("price").innerHTML =  product.price;
document.getElementById("formaPagar").innerHTML = formaPago;






