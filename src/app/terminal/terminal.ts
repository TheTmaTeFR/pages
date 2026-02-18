import { FormsModule } from '@angular/forms';
import { TerminalService } from './terminal-service';
import { Component, ViewChild, ElementRef, AfterViewInit, effect, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.html',
  styleUrls: ['./terminal.scss'],
  imports: [FormsModule],
  encapsulation: ViewEncapsulation.None,
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('output') outputElement!: ElementRef;
  @ViewChild('input') inputElement!: ElementRef<HTMLInputElement>;

  currentInput = '';

  @HostListener('document:click')
  onDocumentClick() {
    this.focusInput();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }

  constructor(private terminalService: TerminalService) {
    effect(() => {
      this.terminalService.outputLines();
      this.scrollToBottom();
    });
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.terminalService.isTyping()) return;

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.currentInput = this.terminalService.getPreviousCommand();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.currentInput = this.terminalService.getNextCommand();
    }
  }

  ngAfterViewInit() {
    this.focusInput();
  }

  onEnter(): void {
    if (this.currentInput.trim() && !this.terminalService.isTyping()) {
      this.terminalService.executeCommand(this.currentInput);
      this.currentInput = '';
      setInterval(() => this.focusInput(), 10);
    }
  }

  focusInput(): void {
    this.inputElement.nativeElement.focus();
  }

  scrollToBottom(): void {
    requestAnimationFrame(() => {
      this.outputElement.nativeElement.scrollTop = this.outputElement.nativeElement.scrollHeight;
    });
  }

  isSystemTyping(): boolean {
    return this.terminalService.isTyping();
  }

  outputLines(): string[] {
    return this.terminalService.outputLines();
  }
}
