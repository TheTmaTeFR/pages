import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface Command {
  command: string;
  output: string;
  timestamp: Date;
}

interface TerminalCommand {
  name: string;
  description: string;
  action: (args?: string[]) => string;
}

@Component({
  selector: 'app-terminal',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
})
export class TerminalComponent {
  @Output() close = new EventEmitter<void>();

  form: FormGroup;
  commands: Command[] = [];
  currentInput = '';
  showCursor = true;
  cursorInterval: any;

  private availableCommands: TerminalCommand[] = [
    {
      name: 'help',
      description: "Affiche l'aide",
      action: () => this.getHelp(),
    },
    {
      name: 'clear',
      description: 'Efface le terminal',
      action: () => {
        this.commands = [];
        return '';
      },
    },
    {
      name: 'whoami',
      description: 'Qui suis-je ?',
      action: () =>
        `Thomas VELU - Développeur Java/Spring Boot\nExpert en architecture backend et solutions full-stack`,
    },
    {
      name: 'skills',
      description: 'Mes compétences',
      action: () =>
        `Compétences principales:\n- Java 17+ / Spring Boot 3.x\n- Angular 16+ / TypeScript\n- Architecture Microservices\n- Docker / Kubernetes\n- CI/CD (GitHub Actions, GitLab CI)\n- Bases de données (PostgreSQL, MongoDB)`,
    },
    {
      name: 'projects',
      description: 'Mes projets',
      action: () =>
        `Projets récents:\n1. API de gestion de projets (Spring Boot)\n2. Dashboard Angular avec Recharts\n3. Système de monitoring distribué\n4. Application mobile cross-platform\n\nConsultez la section Projets pour plus de détails.`,
    },
    {
      name: 'contact',
      description: 'Mes coordonnées',
      action: () =>
        `Contact:\nEmail: contact@tvelu.dev\nLinkedIn: linkedin.com/in/thomas-velu\nGitHub: github.com/tvelu77\nCodeberg: codeberg.org/tvelu77`,
    },
    {
      name: 'date',
      description: 'Date actuelle',
      action: () => new Date().toLocaleString('fr-FR'),
    },
    {
      name: 'echo',
      description: 'Répète le texte',
      action: (args: string[] = []) => args.join(' ') || 'Usage: echo <texte>',
    },
    {
      name: 'linux',
      description: 'Informations Linux Mint',
      action: () =>
        `Linux Mint 21.3\nKernel: 5.15.0-xx-generic\nDesktop: Cinnamon\nTheme: Mint-Y (inspiré)`,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.addWelcomeMessage();
    this.startCursorBlink();
  }

  ngOnDestroy(): void {
    this.stopCursorBlink();
  }

  private startCursorBlink(): void {
    this.cursorInterval = setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }

  private stopCursorBlink(): void {
    if (this.cursorInterval) {
      clearInterval(this.cursorInterval);
    }
  }

  private addWelcomeMessage(): void {
    const welcome = `Bienvenue dans le terminal de Thomas VELU\n
Tapez 'help' pour voir les commandes disponibles\nTapez 'whoami' pour en savoir plus sur moi\n\nLinux Mint Theme - Version 1.0.0`;
    this.commands.push({
      command: '',
      output: welcome,
      timestamp: new Date(),
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const input = this.form.get('input')?.value.trim();
    if (!input) return;

    this.form.reset();
    this.addCommand(input);
  }

  private addCommand(input: string): void {
    const [command, ...args] = input.split(' ');
    const cmd = this.availableCommands.find(c => c.name === command.toLowerCase());

    let output = '';
    if (cmd) {
      output = cmd.action(args);
    } else {
      output = `Commande non trouvée: ${command}\nTapez 'help' pour voir les commandes disponibles`;
    }

    this.commands.push({
      command: input,
      output,
      timestamp: new Date(),
    });
  }

  getHelp(): string {
    return `Commandes disponibles:\n\n${this.availableCommands
      .map(cmd => `  ${cmd.name.padEnd(15)} - ${cmd.description}`)
      .join('\n')}\n\nTapez une commande pour l'exécuter`;
  }

  onClose(): void {
    this.close.emit();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSubmit();
    } else if (event.key === 'ArrowUp') {
      // Histoire des commandes (à implémenter)
    } else if (event.key === 'Escape') {
      this.onClose();
    }
  }

  getIcon(icon: string): string {
    const icons: Record<string, string> = {
      github: '🐙',
      codeberg: '🔷',
      linkedin: '🔗',
    };
    return icons[icon] || '🔗';
  }
}
