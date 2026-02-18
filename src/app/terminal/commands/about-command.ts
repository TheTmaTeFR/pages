import { Command } from "./command";
import { CommandName } from "./command-name.enum";

export class AboutCommand implements Command {

  readonly name = CommandName.ABOUT;

  readonly description = 'Affiche des informations à propos de moi.';

  execute(...args: string[]): string {
    return `<span class="command-title">À propos de moi :</span>
🚀 <span class="command-info">Ingénieur Logiciel Java | Passionné par l'Innovation et l'Agilité</span>

Avec une solide expérience en développement <span class="command-help">Java</span> et une touche d'<span class="command-help">Angular</span>, je navigue avec aisance entre les défis technologiques de nombreux secteurs. <span class="command-help">Curieux</span> et toujours en <span class="command-help">veille technologique</span>, j'aime explorer les dernières tendances pour rester à la pointe de l'innovation.

Mon <span class="command-help">adaptabilité</span> et mon <span class="command-help">esprit d'équipe</span> me permettent de m'intégrer rapidement et de contribuer efficacement dans des environnements <span class="command-help">Agile</span>. Prêt à relever de nouveaux défis et à partager mes connaissances, je suis ouvert aux échanges et aux collaborations enrichissantes.

🌍 Passions & Loisirs

- <span class="command-info">Open Source :</span> J'adore explorer et travailler avec des technologies open source, notamment Linux.
- <span class="command-info">Jeux vidéo :</span> Fan de stratégie et de simulation, je trouve dans les jeux vidéo une source d'inspiration et de détente.
- <span class="command-info">Sport/Natation :</span> Oui, même un geek peut aimer le sport ! La natation est mon échappatoire pour rester en forme et me ressourcer.
- <span class="command-info">Technologie :</span> Passionné par le hardware et le software, j'aime bidouiller et optimiser mes configurations pour toujours repousser les limites.
      `;
  }

}
