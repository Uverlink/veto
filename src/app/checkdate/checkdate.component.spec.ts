import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdateComponent } from './checkdate.component';

describe('CheckdateComponent', () => {
  let component: CheckdateComponent;
  let fixture: ComponentFixture<CheckdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
