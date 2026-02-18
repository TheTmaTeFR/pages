import { AboutCommand } from './about-command';
import { Command } from './command';
import { ContactCommand } from './contact-command';
import { HelpCommand } from './help-command';
import { Injectable } from '@angular/core';
import { ProjectsCommand } from './projects-command';
import { ClearCommand } from './clear-command';
import { CommandName } from './command-name.enum';

@Injectable({ providedIn: 'root' })
export class CommandRegistryService {

  private readonly commands: Record<string, Command> = {
    help: new HelpCommand(),
    about: new AboutCommand(),
    projects: new ProjectsCommand(),
    clear: new ClearCommand(),
    contact: new ContactCommand()
  };

  executeCommand(name: string, ...args: string[]): string {
    const command = this.commands[name];
    if (!command) {
      return `<span class="command-error">Erreur :</span> commande inconnue
<span class="command-warning">"${name}"</span>
<span class="command-error">Tapez "help" pour voir les commandes disponibles.</span>
      `;
    }
    if (command.name === CommandName.HELP) {
      return command.execute(...this.getCommandDescriptions());
    }
    return command.execute(...args);
  }

  private getCommandDescriptions(): string[] {
    return Object.entries(this.commands)
      .map(([name, cmd]) => `- <span class="command-help">${name}</span> : ${cmd.description}`);
  }

}
