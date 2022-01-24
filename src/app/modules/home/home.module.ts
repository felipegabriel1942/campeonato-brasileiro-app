import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ClassificationTableComponent } from './components/classification-table/classification-table.component';
import { MatchesCarouselComponent } from './components/matches-carousel/matches-carousel.component';

@NgModule({
  declarations: [ClassificationTableComponent , HomeComponent, MatchesCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
