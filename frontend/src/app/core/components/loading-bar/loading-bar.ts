// core/components/loading-bar/loading-bar.component.ts
import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './loading-bar.html',
  styleUrl: './loading-bar.scss'
})
export class LoadingBarComponent {
  loadingService = inject(LoadingService);
}