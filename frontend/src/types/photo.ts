
export enum PhotoProperty {
    Home = 'home',
    Gallery = 'galeri',
    Video = 'video'
}


export interface IChosen {
    album:any,
    photosChosen: string[],
    poster:string,
    cover:string,
    coverText:string
    
}