import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header.component';
import { HeroComponent } from './sections/hero.component';
import { HighlightsComponent } from './sections/highlights.component';
import { CurriculumComponent } from './sections/curriculum.component';
import { AboutComponent } from './sections/about.component';
import { RegisterComponent } from './sections/register.component';
import { FooterComponent } from './sections/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    HighlightsComponent,
    CurriculumComponent,
    AboutComponent,
    RegisterComponent,
    FooterComponent
  ],
  template: `
    <!-- App Shell: composed of section components -->
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-highlights></app-highlights>
      <app-curriculum></app-curriculum>
      <app-about></app-about>
      <app-register></app-register>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent { }
