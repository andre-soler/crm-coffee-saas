import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FrequenciaRecompra } from '../../../core/models/enums/frequencia-recompra.enum';
import { FormsModule } from '@angular/forms';

interface ClienteView {
  id: number;
  nome: string;
  endereco: string;
  contato: string;
  frequenciaEsperada: FrequenciaRecompra;
  dataUltimaVenda: Date | null;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss'
})
export class ClientesComponent {
  colunasExibidas: string[] = ['nome', 'contato', 'frequencia', 'ultimaVenda', 'acoes'];
  termoBusca = '';

  // Mock temporário — substituir por chamada HTTP quando o backend tiver a entidade Cliente
  clientes: ClienteView[] = [
    { id: 1, nome: 'Padaria Bom Grão', endereco: 'Rua das Flores, 123', contato: '(11) 98765-4321', frequenciaEsperada: FrequenciaRecompra.Quinzenal, dataUltimaVenda: new Date('2026-07-20') },
    { id: 2, nome: 'Café Central', endereco: 'Av. Principal, 456', contato: '(11) 91234-5678', frequenciaEsperada: FrequenciaRecompra.Semanal, dataUltimaVenda: new Date('2026-07-28') },
    { id: 3, nome: 'Mercadinho Aroma', endereco: 'Rua do Comércio, 789', contato: '(11) 99876-5432', frequenciaEsperada: FrequenciaRecompra.Mensal, dataUltimaVenda: new Date('2026-07-01') },
    { id: 4, nome: 'Restaurante Sabor', endereco: 'Praça Central, 10', contato: '(11) 93456-7890', frequenciaEsperada: FrequenciaRecompra.Quinzenal, dataUltimaVenda: null }
  ];

  get clientesFiltrados(): ClienteView[] {
    if (!this.termoBusca.trim()) {
      return this.clientes;
    }
    const termo = this.termoBusca.toLowerCase();
    return this.clientes.filter(c => c.nome.toLowerCase().includes(termo));
  }

  labelFrequencia(frequencia: FrequenciaRecompra): string {
    switch (frequencia) {
      case FrequenciaRecompra.Semanal: return 'Semanal';
      case FrequenciaRecompra.Quinzenal: return 'Quinzenal';
      case FrequenciaRecompra.Mensal: return 'Mensal';
      default: return '-';
    }
  }
}
