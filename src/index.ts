//const {Categoria} = require('./modelos/Categoria')
import { ejercicioProductoCategoria } from "./ejercicioProductoCategoria"
import ejercicio1  from "./ejercicioCancionesPlaylist"
import  { ICliente, IEmpleado } from "./modelos/MultiplesInterfaces"
import InterfaceDePersonas from "./modelos/MultiplesInterfaces"

ejercicioProductoCategoria()
///Musica
ejercicio1()


class Empleado implements IEmpleado{
    id: number
    estado: string
    nombreCompleto: string
    listadoTelefonos: string[] = []

    constructor(id: number, estado: string, nombreCompleto: string){
        this.id = id
        this.estado = estado
        this.nombreCompleto = nombreCompleto
    }

    registrarTelefono(nuevoTelefono: string): string {
        this.listadoTelefonos.push(nuevoTelefono);
        console.log(`Se agregó una nuevo teléfono: ${nuevoTelefono} al empleado: ${this.nombreCompleto}`)
        return nuevoTelefono
    }
    

    saludar(nombrePersona: string): string {
        const saludo = `Mucho gusto ${nombrePersona}, mi nombre es ${this.nombreCompleto}`
        return saludo
    }
    
}

class EmpleadoPorHora implements IEmpleado{
    listadoTelefonos: string[] = []
    
    id: number = 0
    estado: string = "Activo"
    nombreCompleto: string = ""
    saludar(nombrePersona: string): string {
        const saludo = `Hola ${nombrePersona}, soy ${this.nombreCompleto}`
        return saludo
    }

    registrarTelefono(nuevoTelefono: string): string {
        throw new Error("Method not implemented.")
    }
    
    
}

//Ejemplos

let empleado = new Empleado(1, "Activo", "Empleado nuevo")
empleado.registrarTelefono("12345678")