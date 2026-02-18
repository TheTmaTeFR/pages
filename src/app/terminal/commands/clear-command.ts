import { Command } from "./command";
import { CommandName } from "./command-name.enum";

export class ClearCommand implements Command {

  readonly name = CommandName.CLEAR;

  readonly description = 'Nettoie le terminal.';

  execute(...args: string[]): string {
    return '';
  }

}
