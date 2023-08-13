export interface Categoria {
    id: number
    descripcion: string
    estado: "Activo" | "Inactivo"
    subcategoria?: Categoria
    fechaIngreso: Date
}