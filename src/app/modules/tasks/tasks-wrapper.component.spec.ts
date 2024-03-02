import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksWrapperComponent } from './tasks-wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TasksWrapperComponent', () => {
	let component: TasksWrapperComponent;
	let fixture: ComponentFixture<TasksWrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TasksWrapperComponent],
			imports: [RouterTestingModule]
		}).compileComponents();

		fixture = TestBed.createComponent(TasksWrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
