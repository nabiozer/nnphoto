export enum StatusType {
    Shooting = 'Çekim',
    Choice = 'Seçim',
    Progress = 'İşlenme',
    Album = 'Albüm',
    Send = 'Tamamlandı',
}

export const StatusSelect = [
    { Value: StatusType.Shooting },
    { Value: StatusType.Choice },
    { Value: StatusType.Progress },
    { Value: StatusType.Album },
    { Value: StatusType.Send },
];
