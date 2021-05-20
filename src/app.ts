"use strict"
interface Productos {
    id: number,
    nombre: string,
    descripcion: string,
    fecha: Date,
    cantidad: number,
    costo: number
}
class MasterProductos {
    list: Array<Productos>
    buscarlist: Array<Productos>
    constructor() {
        this.list = new Array();
        this.buscarlist = new Array();

    }
    addProductos(productos: Productos) {
        this.list.push(productos);
    };
    removeProductos(id: number) { 
       this.list = this.list.filter((item: Productos) => {
        if(item.id == id) {
            return false;
        }
        return false;
        });
    }
    buscarProducto(key: string){
        var keyExpression: RegExp = new RegExp(key, "i");
        this.buscarlist = this.list.filter((item: Productos) =>{
            if(item.nombre.match(keyExpression) != null){
                return true;
            }
            return false;
        });
        return this.buscarlist;
    }
}

