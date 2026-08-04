import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { Role } from './core/models/enums/role.enum';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'roteiro',
        loadComponent: () =>
          import('./pages/vendedor/roteiro/roteiro').then(m => m.Roteiro),
        canActivate: [roleGuard],
        data: { roles: [Role.Vendedor] }
      }
      // as outras rotas (clientes, vendas/nova, dashboard, etc.) entram aqui também
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];