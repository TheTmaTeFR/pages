import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TerminalComponent } from "./terminal/terminal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TerminalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Thomas VELU | Développeur Java/Spring Boot';
  showTerminal = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  toggleTerminal(): void {
    this.showTerminal = !this.showTerminal;
  }

  closeTerminal(): void {
    this.showTerminal = false;
  }
}
