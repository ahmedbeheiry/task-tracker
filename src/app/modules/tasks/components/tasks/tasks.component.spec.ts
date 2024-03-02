import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { TasksService } from '../../services/tasks.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TasksFiltrationComponent } from '../tasks-filtration/tasks-filtration.component';
import { TasksModule } from '../../tasks.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TasksComponent', () => {
	let component: TasksComponent;
	let fixture: ComponentFixture<TasksComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TasksComponent],
			imports: [
				HttpClientTestingModule,
				TasksModule,
				RouterTestingModule,
			],
			providers: [TasksService],
		}).compileComponents();

		fixture = TestBed.createComponent(TasksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
