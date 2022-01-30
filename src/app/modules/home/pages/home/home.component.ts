import { Component, OnInit } from '@angular/core';
import { ClassificationService } from 'src/app/core/http/classification.service';
import { MatchService } from 'src/app/core/http/match.service';
import { Classification } from 'src/app/shared/models/classification.model';
import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  classification: Classification[] = [];
  matches: Match[] = [];

  constructor(
    private classificationService: ClassificationService,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.getClassification();
    this.getMatches();
  }

  getClassification(): void {
    this.classificationService
      .findClassificationBySeason(2021, 'a')
      .subscribe((res) => {
        this.classification = res;
      });
  }

  getMatches(): void {
    this.matchService
      .findMatches(2021, 'a', 35)
      .subscribe((res) => {
        this.matches = res;
      });
  }
}
