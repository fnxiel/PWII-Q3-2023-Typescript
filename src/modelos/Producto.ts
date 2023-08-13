import { Categoria } from "./Categoria"

export type Producto = {
    id: number
    descripcion: string
    precio: number
    categoria: Categoria[]
    estado: "Activo" | "Inactivo"
}