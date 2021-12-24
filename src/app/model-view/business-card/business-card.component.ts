import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {
  baseURI: string = document.baseURI

  constructor() { }

  ngOnInit(): void {
  }

}
