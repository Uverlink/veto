import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../mock-animal-list';
import { Animal } from "../animal";

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.scss']
})
export class ListAnimalComponent {

  animalList: Animal[] = ANIMALS;

}
