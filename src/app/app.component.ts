import { Component, OnInit } from '@angular/core';
import { ANIMALS } from './mock-animal-list';
import { Animal } from "./animal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Super Veto +';
  animalList: Animal[] = ANIMALS;
  animalSelected: Animal|undefined;

  ngOnInit(): void {
    console.table(this.animalList);
  }

  selectAnimal(animalId: string) {
    const id = +animalId
    const animal: Animal|undefined = this.animalList.find(animal => animal.id == +animalId);
    if(animal) {
      console.log(`Vous avez sélectionné ${animal.name}`);
      this.animalSelected = animal;
    } else {
      console.log("Aucun animal ne correspond à cette recherche.")
      this.animalSelected = animal;
    }
    // const index: number = +(event.target as HTMLInputElement).value;
    
  }
}
