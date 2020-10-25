import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTaskComponent } from './current-task.component';

describe('CurrentTaskComponent', () => {
  let component: CurrentTaskComponent;
  let fixture: ComponentFixture<CurrentTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
