export default interface IPersona{
    nombre: string
    apellido: string
}

export interface IEmpleado{
    id: number
    estado: string
    nombreCompleto: string
    listadoTelefonos: string[]
    registrarTelefono(nuevoTelefono: string): string
    ///Obtiene el nombre de la persona a la que este empleado debe saludar y devuelve un mensaje
    saludar(nombrePersona: string): string
}

export interface ICliente{
    id: number
    nombreEmpresa: string
    representante: IPersona
}