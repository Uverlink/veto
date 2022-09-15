import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Animal } from '../animal';
import { ANIMALS } from '../mock-animal-list';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.scss']
})
export class DetailAnimalComponent implements OnInit {
  
animalList: Animal[];
animal: Animal|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.animalList = ANIMALS;
    const animalId: string|null = this.route.snapshot.paramMap.get('id');
    if(animalId) {
      // const animal: Animal|undefined = this.animalList.find(animal => animal.id == +animalId)
      this.animal = this.animalList.find(animal => animal.id == +animalId);
    }
  }
  goToAnimalList() {
    this.router.navigate(['/animals']);
  }
}
