import { IBoxProps } from "../Box/type";



export interface ILoadingModalProps extends Pick<IBoxProps,'sx' | 'id' | 'className' | 'hidden'> {
    text?:string;
}