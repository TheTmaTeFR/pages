import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleTerminal event when onToggleTerminal is called', () => {
    spyOn(component.toggleTerminal, 'emit');
    component.onToggleTerminal();
    expect(component.toggleTerminal.emit).toHaveBeenCalled();
  });

  it('should have correct navigation items', () => {
    expect(component.navItems.length).toBe(4);
    expect(component.navItems[0].path).toBe('/accueil');
    expect(component.navItems[1].label).toBe('Projets');
  });

  it('should have correct social links', () => {
    expect(component.socialLinks.length).toBe(3);
    expect(component.socialLinks[0].url).toContain('github');
    expect(component.socialLinks[1].url).toContain('codeberg');
    expect(component.socialLinks[2].url).toContain('linkedin');
  });
});