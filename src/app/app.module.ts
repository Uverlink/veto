import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { CheckdateComponent } from './checkdate/checkdate.component';
import { ListAnimalComponent } from './list-animal/list-animal.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    CheckdateComponent,
    ListAnimalComponent,
    DetailAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
