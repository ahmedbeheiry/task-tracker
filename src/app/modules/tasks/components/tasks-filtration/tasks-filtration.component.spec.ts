import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFiltrationComponent } from './tasks-filtration.component';

describe('TasksFiltrationComponent', () => {
  let component: TasksFiltrationComponent;
  let fixture: ComponentFixture<TasksFiltrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksFiltrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksFiltrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
