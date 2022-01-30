import { Component, OnInit } from '@angular/core';
import { ClassificationService } from 'src/app/core/http/classification.service';
import { Classification } from 'src/app/shared/models/classification.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classification: Classification[] = [];

  constructor(private classificationService: ClassificationService) { }

  ngOnInit(): void {
    this.getClassification();
  }

  getClassification(): void {
    this.classificationService.findClassificationBySeason(2021, 'a')
      .subscribe(res => {
        this.classification = res;
    });
  }

}
