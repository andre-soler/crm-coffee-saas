// core/guards/role.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/enums/role.enum';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const rolesPermitidas = route.data['roles'] as Role[];
  const usuarioAtual = authService.getUsuarioLogado();

  if (usuarioAtual && rolesPermitidas.includes(usuarioAtual.role)) {
    return true;
  }

  router.navigate(['/acesso-negado']);
  return false;
};