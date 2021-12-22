import {Directive} from '@angular/core';
import {ModelViewerElement} from "@google/model-viewer";

@Directive({
  selector: '[appModelViewer]'
})
export class ModelViewerDirective {
  constructor() {
    dummyLoad(ModelViewerElement)
  }
}

function dummyLoad(module: any) {
}
