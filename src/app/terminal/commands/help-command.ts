import { Command } from "./command";
import { CommandName } from "./command-name.enum";

export class HelpCommand implements Command {

  readonly name = CommandName.HELP;

  readonly description = 'Affiche la liste des commandes disponibles.';

  execute(...args: string[]): string {
    return args.join('<br>');
  }

}
