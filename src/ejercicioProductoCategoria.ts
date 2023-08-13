import { Categoria } from "./modelos/Categoria"
import { Producto } from "./modelos/Producto"

export function ejercicioProductoCategoria(){
    let variable: number = 1234567
    let variableBooleana: boolean = true
    
    let observacion: string | number
    
    observacion = "Valor texto"
    observacion = 0
    
    
    let variableOpcional: string | undefined
    
    variableOpcional = undefined
    variableOpcional = ""
    
    
    let categoria: Categoria = {
        id: 1,
        descripcion: "Electronico",
        estado: "Activo",
        fechaIngreso: new Date(),
        subcategoria: {
            id: 1.1,
            descripcion: "Equipo de computadora",
            estado: "Activo",
            fechaIngreso: new Date()
        }
    }
    
    console.log(categoria)
    const arregloCategorias: Categoria[] = [categoria]
    
    
    
    let producto: Producto = {
        id: 1,
        descripcion: "Teclado",
        precio: 100,
        categoria: arregloCategorias,
        estado: "Activo"
    }
    
    console.log(producto)
    
    //Arreglos 
    
    //Definidiendo un arreglo vacio que debe ser de tipo producto
    let productos: Producto[] = []
    
    productos.push(producto)
    
    let producto2: Producto = {
        id: 0,
        descripcion: "",
        precio: 0,
        categoria: [],
        estado: "Activo"
    }
    
    //Tipos en funciones
    
    
    function agregarProducto(producto: Producto): Producto[]{
        productos.push(producto)
        return productos
    }
    
    let variableJS: any = 123124
    variableJS = "asdasd"
    
}

