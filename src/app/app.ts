import { Component, signal, } from '@angular/core';
import { MenubarComponent } from './menubar/menubar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenubarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tvelu77.frama.io');
}
