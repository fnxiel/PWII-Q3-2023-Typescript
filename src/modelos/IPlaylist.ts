import {ICancion} from "./ICancion"
import {IVideo} from "./IVideo"

export interface IPlaylist{
    id: number
    titulo: string
    multimedia: ICancion[] | IVideo[]
    agregarCancion(cancion: ICancion): void
    removerCancion(idCancion: number): void
    reproducir(idCancion: number): boolean
    detener(): void
}