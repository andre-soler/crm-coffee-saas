import { FrequenciaRecompra } from '../enums/frequencia-recompra.enum';

export interface Clientes {
    clienteid: number;
    nome: string;
    endereco: string;
    cnpj: string;
    email: string;
    telefone: string;
    vendedorid: number;
    frequenciaEsperada: FrequenciaRecompra;
    dataUltimaCompra: Date;
 
}