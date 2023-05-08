
export enum PhotoProperty {
    Home = 'home',
    Gallery = 'gallery',
    Video = 'video',
    Album = 'album'
}


export interface IChosen {
    album:any,
    photosChosen: string[],
    poster:string,
    cover:string,
    coverText:string
    
}