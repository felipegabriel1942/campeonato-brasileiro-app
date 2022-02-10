import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ClassificationTableComponent } from './components/classification-table/classification-table.component';
import { MatchesCarouselComponent } from './components/matches-carousel/matches-carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoundSelectorComponent } from './components/matches-carousel/components/round-selector/round-selector.component';
import { MatchCardComponent } from './components/matches-carousel/components/match-card/match-card.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    ClassificationTableComponent,
    HomeComponent,
    MatchesCarouselComponent,
    RoundSelectorComponent,
    MatchCardComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class HomeModule {}
