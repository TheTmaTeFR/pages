import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [animate('0.6s ease-out')]),
    ]),
    trigger('typewriter', [
      state('void', style({ width: '0%' })),
      state('*', style({ width: '100%' })),
      transition('void => *', [animate('3s steps(40)')]),
    ]),
  ],
})
export class Hero {
  typedText = '';
  fullText =
    'Développeur Java/Spring Boot | Architecte Backend | Passionné par les solutions robustes';
  showCursor = true;

  stats = [
    { label: "Années d'expérience", value: '5+', icon: '💼' },
    { label: 'Projets réalisés', value: '20+', icon: '🚀' },
    { label: 'Technologies maîtrisées', value: '15+', icon: '🛠️' },
    { label: 'Clients satisfaits', value: '10+', icon: '😊' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.typeText();
    setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }

  private typeText(): void {
    let i = 0;
    const speed = 50;

    const type = () => {
      if (i < this.fullText.length) {
        this.typedText += this.fullText.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };

    setTimeout(type, 500);
  }
}
