// core/layouts/menu-items.config.ts
import { Role } from '../models/enums/role.enum';

export interface MenuItem {
  label: string;
  rota: string;
  icone: string;
  roles: Role[];
}

export const MENU_ITEMS: MenuItem[] = [
  // Vendedor
  {
    label: 'Meu Roteiro do Dia',
    rota: '/roteiro',
    icone: 'route',
    roles: [Role.Vendedor]
  },
  {
    label: 'Meus Clientes',
    rota: '/clientes',
    icone: 'people',
    roles: [Role.Vendedor]
  },
  {
    label: 'Registrar Venda',
    rota: '/vendas/nova',
    icone: 'point_of_sale',
    roles: [Role.Vendedor]
  },
  {
    label: 'Meu Desempenho',
    rota: '/desempenho',
    icone: 'insights',
    roles: [Role.Vendedor]
  },

  // Gestor
  {
    label: 'Dashboard do Time',
    rota: '/dashboard',
    icone: 'dashboard',
    roles: [Role.Gestor]
  },
  {
    label: 'Gerenciamento de Vendedores',
    rota: '/vendedores',
    icone: 'manage_accounts',
    roles: [Role.Gestor]
  },
  {
    label: 'Todos os Clientes',
    rota: '/clientes/todos',
    icone: 'groups',
    roles: [Role.Gestor]
  },
  {
    label: 'Relatório de Vendas',
    rota: '/relatorios/vendas',
    icone: 'bar_chart',
    roles: [Role.Gestor]
  },

  // Compartilhados
  {
    label: 'Meu Perfil',
    rota: '/perfil',
    icone: 'person',
    roles: [Role.Vendedor, Role.Gestor]
  },
  {
    label: 'Configurações',
    rota: '/configuracoes',
    icone: 'settings',
    roles: [Role.Vendedor, Role.Gestor]
  }
];