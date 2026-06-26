import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminalComponent } from './terminal.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TerminalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with welcome message', () => {
    expect(component.commands.length).toBeGreaterThan(0);
    expect(component.commands[0].output).toContain('Bienvenue');
  });

  it('should add command to commands array on submit', () => {
    const initialCount = component.commands.length;
    component.form.get('input')?.setValue('help');
    component.onSubmit();
    expect(component.commands.length).toBeGreaterThan(initialCount);
  });

  it('should not add empty command', () => {
    const initialCount = component.commands.length;
    component.form.get('input')?.setValue('   ');
    component.onSubmit();
    expect(component.commands.length).toBe(initialCount);
  });

  it('should emit close event', () => {
    spyOn(component.close, 'emit');
    component.onClose();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should return help text', () => {
    const help = component.getHelp();
    expect(help).toContain('Commandes disponibles');
    expect(help).toContain('help');
    expect(help).toContain('clear');
  });

  afterEach(() => {
    component.ngOnDestroy();
  });
});
