import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit {
  baseURI: string = document.baseURI

  constructor() { }

  ngOnInit(): void {
  }

}
