import { Component, OnInit } from '@angular/core';
import { ClassificationService } from 'src/app/core/http/classification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private classificationService: ClassificationService) { }

  ngOnInit(): void {
    this.classificationService.findClassificationBySeason(2021, 'a')
      .subscribe(res => {
        console.log(res);
    });
  }

}
