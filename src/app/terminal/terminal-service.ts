import { CommandRegistryService } from './commands/command-registry.service';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TerminalService {

  constructor(private readonly commandRegistry: CommandRegistryService) {}

  outputLines = signal<string[]>([
    "Bienvenue dans mon portfolio ! Tapez 'help' pour voir les commandes."
  ]);
  isTyping = signal<boolean>(false);

  private commandHistory: string[] = [];
  private historyIndex = -1;

  executeCommand(input: string): void {
    const [name] = input.split(' ');
    const currentLines = this.outputLines();
    this.outputLines.set([...currentLines, `> ${input}`]);

    if (name === 'clear') {
      this.outputLines.set([]);
      return;
    }

    const response = this.commandRegistry.executeCommand(name);
    this.outputLines.set([...this.outputLines(), '']);
    this.typeWriterEffect(response);
  }

  getPreviousCommand(): string {
    if (this.commandHistory.length === 0) {
      return '';
    }
    if (this.historyIndex + 1 >= this.commandHistory.length) {
      return this.commandHistory[this.commandHistory.length - 1];
    }
    this.historyIndex++;
    return this.commandHistory[this.historyIndex];
  }

  getNextCommand(): string {
    if (this.historyIndex <= 0) {
      this.historyIndex = -1;
      return '';
    }
    this.historyIndex--;
    return this.commandHistory[this.historyIndex];
  }

  private typeWriterEffect(text: string, speed: number = 1): void {
    this.isTyping.set(true);
    let i = 0;
    const currentLines = this.outputLines();
    const lastIndex = currentLines.length - 1;
    let lastUpdate = 0;

    const animate = (timestamp: number) => {
      if (!lastUpdate || timestamp - lastUpdate >= speed) {
        if (i <= text.length) {
          currentLines[lastIndex] = text.substring(0, i);
          this.outputLines.set([...currentLines]);
          i++;
          lastUpdate = timestamp;
        } else {
          this.isTyping.set(false);
          return;
        }
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
}
