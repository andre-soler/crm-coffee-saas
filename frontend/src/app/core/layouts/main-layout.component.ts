import { Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { MENU_ITEMS, MenuItem } from './menu-items.config';
import { LoadingBarComponent } from '../components/loading-bar/loading-bar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    LoadingBarComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  private authService = inject(AuthService);

  usuarioAtual = this.authService.getUsuarioLogado();

  itensMenu: MenuItem[] = MENU_ITEMS.filter(item =>
    this.usuarioAtual ? item.roles.includes(this.usuarioAtual.role) : false
  );

  fazerLogout(): void {
    this.authService.logout().subscribe();
  }
}