import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { Role } from '../../../core/models/enums/role.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  carregando = false;
  mensagemErro = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  });

  entrar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.carregando = true;
    this.mensagemErro = '';

    const { email, senha } = this.form.value;

    this.authService.login(email!, senha!).subscribe({
      next: (usuario) => {
        this.carregando = false;
        this.redirecionarPorRole(usuario.role);
      },
      error: () => {
        this.carregando = false;
        this.mensagemErro = 'E-mail ou senha inválidos.';
      }
    });
  }

  private redirecionarPorRole(role: Role): void {
    if (role === Role.Vendedor) {
      this.router.navigate(['/roteiro']);
    } else if (role === Role.Gestor) {
      this.router.navigate(['/dashboard']);
    }
  }
}
