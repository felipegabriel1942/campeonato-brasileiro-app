import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() seasons: number[];
  @Input() divisions: string[];

  @Output() onFilterChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
