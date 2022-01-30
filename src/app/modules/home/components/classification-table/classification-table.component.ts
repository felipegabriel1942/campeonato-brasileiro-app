import { Component, Input, OnInit } from '@angular/core';
import { Classification } from 'src/app/shared/models/classification.model';

@Component({
  selector: 'app-classification-table',
  templateUrl: './classification-table.component.html',
  styleUrls: ['./classification-table.component.css']
})
export class ClassificationTableComponent implements OnInit {

  @Input() classification: Classification[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
