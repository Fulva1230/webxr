import {Directive} from '@angular/core';
import {ModelViewerElement} from "@google/model-viewer";

@Directive({
  selector: '[appModelViewerLoader]'
})
export class ModelViewerLoaderDirective {
  constructor() {
    dummyLoad(ModelViewerElement)
  }
}

function dummyLoad(module: any) {
}
