export interface IDeliveryInfo {
    address: string;
    phoneNumber: string;
}

export interface IAlbum {
   
    box: string;
    canvasDetail: string;
    isPoster: boolean;
    albumDetail:string;
    familyDetail:string;
    posterDetail: string;
    pvc: string;
    wood: string;
}

export interface IReservationInfo {
    date: number;
    place: string;
    packagePrice: number;
    packageDetails: string;
    advancePayment: number;
    album: IAlbum;
}

export interface IChosenAlbum {
    colorCode: string;
    albumName: string;
}

export interface IChosen {
    album: IChosenAlbum;
    photosChosen: string[];
    poster: string;
    cover: string;
    coverText: string;
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    reservationInfo: IReservationInfo;
    address: string;
    phoneNumber: string;
    chosen: IChosen;
    photos: string;
    video: string;
    status: string;
    isAdmin: boolean;
    isDone: {
        type: Boolean;
        default: false;
    };
    createdAt: any;
    updatedAt: any;
    token: string;
}
