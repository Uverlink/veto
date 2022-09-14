import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Super Veto +';
  animalList = ['Chien',"Chat","Tigre"];

  ngOnInit(): void {
    console.table(this.animalList);
  }

  selectAnimal(animalName: string) {
    console.log(`Vous avez sélectionné ${animalName}`);
  }
}
