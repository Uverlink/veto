import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-checkdate',
  templateUrl: './checkdate.component.html',
  styleUrls: ['./checkdate.component.scss']
})
export class CheckdateComponent implements OnInit {
  @Input() animal: Animal;
  state : 'short' | 'mid' | 'late' = 'late';
  diffTime : number = 0;

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    const diff = today.getTime() - this.animal.lastvisit.getTime();
    
    if (diff < 30 * 1000 * 3600 * 24)
    {
      this.state = 'short';
    }
    else if (diff < 30 * 1000 * 3600 * 24 * 6)
    {
      this.state = 'mid';
    }
    else
    {
      this.state = 'late';
    }

    this.diffTime = Math.floor(diff);
  }
}
