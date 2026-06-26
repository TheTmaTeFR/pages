import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  contactInfo = [
    {
      type: 'Email',
      value: 'contact@tvelu.dev',
      icon: '✉️',
      link: 'mailto:contact@tvelu.dev',
    },
    {
      type: 'Téléphone',
      value: '+33 6 12 34 56 78',
      icon: '📞',
      link: 'tel:+33612345678',
    },
    {
      type: 'Localisation',
      value: 'Paris, France',
      icon: '📍',
      link: 'https://goo.gl/maps/...',
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/thomas-velu',
      icon: '🔗',
      link: 'https://www.linkedin.com/in/thomas-velu/',
    },
    {
      type: 'GitHub',
      value: 'github.com/tvelu77',
      icon: '🐙',
      link: 'https://github.com/tvelu77',
    },
    {
      type: 'Codeberg',
      value: 'codeberg.org/tvelu77',
      icon: '🔷',
      link: 'https://codeberg.org/tvelu77',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitError = '';

    // Simulation de l'envoi (à remplacer par un appel API réel)
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();

      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);

    if (!control || !control.errors) return '';

    if (control.errors['required']) {
      return 'Ce champ est obligatoire';
    }
    if (control.errors['minlength']) {
      return `Minimum ${control.errors['minlength'].requiredLength} caractères`;
    }
    if (control.errors['email']) {
      return 'Email invalide';
    }

    return '';
  }
}
