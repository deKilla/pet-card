import { Routes, RouterModule } from '@angular/router';
import {AddPetComponent} from "./add-pet/add-pet.component";
import {PetInfoComponent} from "./pet-info/pet-info.component";
import {EditPetComponent} from "./edit-pet/edit-pet.component";
import {AppComponent} from "../app.component";

const PET_ROUTES: Routes = [
  {
    path: 'addPet',
    component: AddPetComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'petInfo',
    component: PetInfoComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'petInfo/:id',
    component: PetInfoComponent,
    canActivate: [ AppComponent ]
  },
  {
    path: 'editPet',
    component: EditPetComponent,
    canActivate: [ AppComponent ]
  }
];

export const PetRouterModule
  = RouterModule.forChild(PET_ROUTES);
