import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ResearcherComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styles: `:host {@apply min-h-screen flex flex-col [&>*:last-child]:mt-auto}`,
})
export class AppComponent {}
