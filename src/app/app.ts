import { Component, signal } from '@angular/core';
import { TerminalComponent } from "./terminal/terminal";

@Component({
  selector: 'app-root',
  imports: [TerminalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tvelu77.frama.io');
}
