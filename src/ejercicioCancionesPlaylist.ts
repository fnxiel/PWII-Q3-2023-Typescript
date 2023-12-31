import { ICancion } from "./modelos/ICancion"
import { IPlaylist } from "./modelos/IPlaylist"

export default function ejercicioCancionesPlaylist(){
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
        
        
}