import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PassgenpartComponent} from "./components/passgenpart/passgenpart.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {InfoComponent} from "./components/info/info.component";
import {AdvantagesComponent} from "./components/advantages/advantages.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PassgenpartComponent,
        HeaderComponent,
        FooterComponent,
        InfoComponent,
        AdvantagesComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spakee-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spakee-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('spakee-angular app is running!');
  });
});
