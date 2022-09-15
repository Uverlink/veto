import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../mock-animal-list';
import { Router, ActivatedRoute } from '@angular/router';
import { Animal } from "../animal";

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.scss']
})
export class ListAnimalComponent {

  animalList: Animal[] = ANIMALS;

  constructor(private router: Router) {}

  gotoAnimal(animal: Animal) {
    this.router.navigate(['/animal', animal.id])
  }
}
