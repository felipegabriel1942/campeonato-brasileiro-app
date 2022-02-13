import { Component, OnInit } from '@angular/core';

import { faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faTools = faTools;

  constructor() { }

  ngOnInit(): void {
  }

  configuration(): void {
    console.log('teste');
  }

}
