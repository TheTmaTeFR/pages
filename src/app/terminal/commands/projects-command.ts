import { Command } from "./command";
import { CommandName } from "./command-name.enum";

export class ProjectsCommand implements Command {

  readonly name = CommandName.PROJECTS;

  readonly description = 'Liste mes projets.';

  execute(...args: string[]): string {
    return 'Voici mes projets (à implémenter).';
  }

}
