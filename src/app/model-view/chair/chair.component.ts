import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit {
  baseURI: string = document.baseURI

  constructor() { }

  ngOnInit(): void {
  }

}
