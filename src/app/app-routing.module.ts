import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from "./demo/demo.component";
import {ModelViewerComponent} from "./model-viewer/model-viewer.component";

const routes: Routes = [
  {path: "demo", component: DemoComponent},
  {path: "model-viewer", component: ModelViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
