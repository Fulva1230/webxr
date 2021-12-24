import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelViewRoutingModule } from './model-view-routing.module';
import {ModelViewerLoaderDirective} from "../model-viewer/model-viewer-loader.directive";
import { ChairComponent } from './chair/chair.component';
import { BusinessCardComponent } from './business-card/business-card.component';


@NgModule({
  declarations: [
    ModelViewerLoaderDirective,
    ChairComponent,
    BusinessCardComponent
  ],
  imports: [
    CommonModule,
    ModelViewRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModelViewModule { }
