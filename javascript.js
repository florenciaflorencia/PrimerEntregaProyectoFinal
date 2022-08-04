function saludar () {
    alert("¡Bienvenidos a DecoHome!");
    let newsLetter = prompt ("Ingresa tu mail para recibir las novedades");
}

saludar();

class carrito{
    constructor(nombre,precio,unidades){
        this.nombre=nombre;
        this.precio=precio;
        this.unidades=unidades;
    }
}

const productos = [];

let producto = prompt ("Ingresa el producto \nbowls\nsets bowls x 6 unidades\n\nmoldes de helado\n\nset cubiertos\n\norganizadores/n (comprar para finalizar");
let precio=0;

while(producto!="comprar"){
        switch(producto){
            case "bowls":
                productos.push(new carrito(bowls,1005,1));
                console.log("Por unidad $1005");
                precio=precio+1005;
                break;
            case "sets bowls":
                productos.push(new carrito(setsbowls,5729,1));
                console.log(" Set por 6 unidades $5729");
                precio=precio+5729;
                break;
            case "moldes de helado":
                productos.push(new carrito(moldesdehelado,1500,1));
                console.log("moldes de helado $1500");
                precio=precio+1500;
                break;
            case "set cubiertos":
                productos.push(new carrito(setcubiertos,2455,1));
                console.log("set cubiertos $2455");
                precio=precio+2455;
                    break;
            case "organizadores":
                productos.push(new carrito(organizadores,3544,1));
                console.log("organizadores $3544");
                precio=precio+3544;
                break;
            default:
                console.log("Sin stock");
                break;
        }
        producto=prompt("Agrega al carrito (comprar para finalizar)");
    }
    
    console.log("Total a pagar $"+precio);