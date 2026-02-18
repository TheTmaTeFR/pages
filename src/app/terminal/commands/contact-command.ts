import { Command } from "./command";
import { CommandName } from "./command-name.enum";

export class ContactCommand implements Command {

  readonly name = CommandName.CONTACT;

  readonly description = 'Affiche mes coordonnées.';

  execute(...args: string[]): string {
    return `<span class="command-title">Mes coordonnées :</span>
Email : <span class="command-info"><a href="mailto:velu.thomas@murena.io">velu.thomas@murena.io</a></span>
Téléphone : <span class="command-info">+33 6 62 49 27 87</span>
LinkedIn : <span class="command-info"><a href="https://www.linkedin.com/in/thomas-velu/">thomas-velu</a></span>
FramaGit : <span class="command-info"><a href="https://framagit.org/tvelu77">tvelu77</a></span>
Github : <span class="command-info"><a href="https://github.com/tvelu77">tvelu77</a></span>
      `;
  }

}
