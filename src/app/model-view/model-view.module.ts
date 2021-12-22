import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelViewRoutingModule } from './model-view-routing.module';
import { ModelViewComponent } from './model-view.component';
import {ModelViewerLoaderDirective} from "../model-viewer/model-viewer-loader.directive";


@NgModule({
  declarations: [
    ModelViewComponent,
    ModelViewerLoaderDirective
  ],
  imports: [
    CommonModule,
    ModelViewRoutingModule
  ]
})
export class ModelViewModule { }
