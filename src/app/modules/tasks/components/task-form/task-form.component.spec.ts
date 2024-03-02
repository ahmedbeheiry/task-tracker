import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('TaskFormComponent', () => {
	let component: TaskFormComponent;
	let fixture: ComponentFixture<TaskFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TaskFormComponent],
			imports: [
				RouterTestingModule,
				HttpClientTestingModule,
				ReactiveFormsModule,
				SharedModule
			],
		}).compileComponents();

		fixture = TestBed.createComponent(TaskFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
