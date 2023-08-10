let variable: number = 1234567
let variableBooleana: boolean = true

let observacion: string | number

observacion = "Valor texto"
observacion = 0


let variableOpcional: string | undefined

variableOpcional = undefined
variableOpcional = ""



interface Categoria {
    id: number
    descripcion: string
    estado: "Activo" | "Inactivo"
    subcategoria?: Categoria
    fechaIngreso: Date
}

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

type Producto = {
    id: number
    descripcion: string
    precio: number
    categoria: Categoria[]
    estado: "Activo" | "Inactivo"
}

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


///Musica

interface ICancion{
    id: number
    titulo: string
    duracion: number
    reproduciendo: boolean
}
interface IVideo{
    id: number
    titulo: string
    duracion: number
    reproduciendo: boolean
}

interface IPlaylist{
    id: number
    titulo: string
    multimedia: ICancion[] | IVideo[]
    agregarCancion(cancion: ICancion): void
    removerCancion(idCancion: number): void
    reproducir(idCancion: number): boolean
    detener(): void
}


let cancion : ICancion = {
id: 1,
titulo: "Marcha imperial",
duracion: 5,
reproduciendo: false
}

let cancion2 : ICancion = {
id: 2,
titulo: "Duelo de los jedi",
duracion: 3,
reproduciendo: false
}

let playlist : IPlaylist = {
id: 1,
titulo: "Canciones para estudiar",
multimedia: [],
agregarCancion: function(cancion: ICancion): void {
    this.multimedia.push(cancion)
},
removerCancion: function(idCancion: number): void {
    this.multimedia = this.multimedia.filter(elemento => elemento.id !== idCancion)
},
reproducir: function(idCancion: number): boolean {
    let cancionReproducir = this.multimedia.find(cancion => cancion.id === idCancion)
    if (cancionReproducir !== undefined){
        cancionReproducir.reproduciendo = true
        return cancionReproducir.reproduciendo
    }else{
        //Manejar error
        return false
    }
},
detener: function(): void {

    let canciones = this.multimedia.map(cancion => cancion.reproduciendo = false)
    console.log(canciones)
}
}


playlist.agregarCancion(cancion)
playlist.agregarCancion(cancion2)

playlist.detener()

//for
//forEach
//map
