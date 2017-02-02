import { Routes, RouterModule } from '@angular/router';
import {AddDiseaseComponent} from "./add-disease/add-disease.component";
import {AppComponent} from "../app.component";
import {EditDiseaseComponent} from "./edit-disease/edit-disease.component";

const DISEASE_ROUTES: Routes = [
  {
    path: 'addDisease',
    component: AddDiseaseComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'editDisease',
    component: EditDiseaseComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'editDisease/:id',
    component: EditDiseaseComponent,
    canActivate: [ AppComponent ]
  }
];

export const DiseaseRouterModule
  = RouterModule.forChild(DISEASE_ROUTES);
