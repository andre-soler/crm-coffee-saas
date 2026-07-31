import {environment} from '../../../environments/environment';

export const API_ENDPOINTS = {
  auth: `${environment.apiUrl}/auth`,
  vendedores: `${environment.apiUrl}/vendedores`,
  clientes: `${environment.apiUrl}/clientes`,
  vendas: `${environment.apiUrl}/vendas`,
  roteiros: `${environment.apiUrl}/roteiros`,
  produtos: `${environment.apiUrl}/produtos`
}