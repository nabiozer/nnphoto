


export interface IDeliveryInfo  {
    adress:string,
    phoneNumber:string,
}

export interface IReservationInfo {
    date : number,
    place : string
    packagePrice : string,
    packageDetails : string
    advancePayment: string
    album:string,

}

export interface IChosenAlbum {
colorCode:string,
albumName:string,
}


export interface IChosen {
album:IChosenAlbum,
photosChosen: string[],
poster:string,
cover:string,
coverText:string

}

export interface IUser {
    _id:string;
    name : string,
    email : string,
    password : string,
    deliveryInfo : IDeliveryInfo,
    reservationInfo : IReservationInfo,
    chosen :IChosen,
    photos:string,
    video:string,
    albumDelivered:boolean
    photoProcessed:boolean
    isAdmin : boolean
    isDone:{
        type:Boolean,
        default:false
    },
    createdAt:any,
    updatedAt:any,
    token:string,
   
}


