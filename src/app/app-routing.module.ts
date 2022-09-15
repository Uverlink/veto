import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { ListAnimalComponent } from './list-animal/list-animal.component';

const routes: Routes = [
  { path: 'animals', component: ListAnimalComponent},
  { path: 'animal/:id', component: DetailAnimalComponent},
  { path: '', redirectTo: 'animals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
