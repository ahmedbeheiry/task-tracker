import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsComponent } from './task-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../../shared/shared.module';

describe('TaskDetailsComponent', () => {
	let component: TaskDetailsComponent;
	let fixture: ComponentFixture<TaskDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TaskDetailsComponent],
			imports: [
				RouterTestingModule,
				HttpClientTestingModule,
				SharedModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(TaskDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
