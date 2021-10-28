class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this.tipoEntrada=tipoEntrada;
        this.marca=marca;    
    }
    get tipoEntrada(){
        return this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this.tipoEntrada=tipoEntrada;
    }
    get marca(){
        return this.marca;
    }
    set marca(marca){
        this.marca=marca;
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idRaton=++Raton.contadorRatones;
    }
    get idRaton(){
        return this.idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this.idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca} ]`;
    }
  
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idTeclado=++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this.idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this.idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca} ]`;
    }

}
class Monitor{
    static contadorMonitores=0;
    constructor(marca,tamaño){
        this.idMOnitor=++Monitor.contadorMonitores;
        this.marca=marca;
        this.tamaño=tamaño;
    }
    get idMOnitor(){
        return this.idMOnitor;
    }
    get marca(){
        return this.marca;
    }
    set marca(marca){
        this.marca=marca;
    }
    get tamaño(){
        return this.tamaño;
    }
    set tamaño(tamaño){
        this.tamaño=tamaño;
    }
    toString(){
        return `idMonitor:[ ${this.idMOnitor}, Marca: ${this.marca}, Tamano:  ${this.tamaño}]`;
    }
}
class Computadora{
    static contadorComputadoras=0;
    constructor(nombre, monitor, teclado, raton){
        this.idComputadora=++Computadora.contadorComputadoras;
        this.nombre=nombre;
        this.monitor=monitor;
        this.teclado=teclado;
        this.raton=raton;
    }
    toString(){
        return `idComputadora:[ ${this.idComputadora}, Nombre: ${this.nombre}, \n ${this.monitor},\n ${this.idRaton},\n  ${this.idTeclado}]`;
     }
}
class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }
    get Orden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this.computadora.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden+=`\n ${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}