import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  socialLinks: SocialLink[] = [
    { icon: 'github', label: 'GitHub', url: 'https://github.com/TheTmaTeFR' },
    { icon: 'code', label: 'Codeberg', url: 'https://codeberg.org/tvelu77' },
    { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/thomas-velu/' },
    { icon: 'mail', label: 'Email', url: 'mailto:thomas.velu@example.com' },
  ];

  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(): void {
    // Logique pour envoyer le formulaire
    console.log('Formulaire envoyé:', this.contactForm);
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    this.contactForm = { name: '', email: '', message: '' };
  }
}
