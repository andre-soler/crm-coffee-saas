import { StatusVisita } from '../enums/status-visita.enum';
import { OrigemItem } from '../enums/origem-item.enum';

export interface ItemRoteiro {
    itemroteiroid: number;
    roteiroid: number;
    clienteid: number;
    status: StatusVisita;
    origem: OrigemItem;
}