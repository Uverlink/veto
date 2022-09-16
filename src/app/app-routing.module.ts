import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { ListAnimalComponent } from './list-animal/list-animal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'animals', component: ListAnimalComponent},
  { path: 'animal/:id', component: DetailAnimalComponent},
  { path: '', redirectTo: 'animals', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
