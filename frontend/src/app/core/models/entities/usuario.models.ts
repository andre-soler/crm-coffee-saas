import { Role } from '../enums/role.enum';

export interface Usuario {
    usuarioid: number;
    nome: string;
    email: string;
    senha: string;
    role: Role;

}