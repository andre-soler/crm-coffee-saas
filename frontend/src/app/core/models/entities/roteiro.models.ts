import {ItemRoteiro} from './item-roteiro.models';
import { StatusRoteiro } from '../enums/status-roteiro.enum';
export interface Roteiro {
    roteiroid: number;
    vendedorid: number;
    data: Date;
    status: StatusRoteiro;
    itens: ItemRoteiro[];
}