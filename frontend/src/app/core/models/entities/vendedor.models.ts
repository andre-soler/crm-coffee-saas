import { Clientes } from "./clientes.models";

export interface Vendedor {
    vendedorid: number;
    usuarioid: number;
    meta: number;
    clientes: Clientes[];
    gestorid: number;

}