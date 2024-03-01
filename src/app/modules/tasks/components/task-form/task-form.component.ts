import { Component, OnInit } from '@angular/core';
import { TaskPriorityEnum } from '../../enums/task-priority.enum';
import { ValidateFormControl } from '../../../../shared/helpers/form-validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from '../../../../shared/models/breadcrumb.model';
import { AddTaskBody } from '../../models/add-task.model';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-task-form',
	templateUrl: './task-form.component.html',
	styleUrl: './task-form.component.scss',
})
export class TaskFormComponent extends ValidateFormControl implements OnInit {
	taskForm: FormGroup;
	pageType: 'add' | 'edit' = 'add';
	taskPriorityEnum = TaskPriorityEnum;
	breadcrumbData: Breadcrumb[] = [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'Tasks',
			url: '/tasks',
		},
		{
			label: 'Add Task',
			url: '',
		},
	];
	isLoading: boolean = false;
	task: Task;

	get isEditPage(): boolean {
		return this.pageType === 'edit';
	}

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private tasksService: TasksService
	) {
		super();
	}

	ngOnInit(): void {
		this.getPageType();
		this.initForm();
		if (this.isEditPage) {
			this.getTaskDetails();
		}
	}

	getPageType(): void {
		this.pageType = this.route.snapshot.data['action'];
	}

	initForm(): void {
		this.taskForm = this.fb.group({
			title: [null, [Validators.required]],
			description: [null, [Validators.required]],
			priority: [TaskPriorityEnum.LOW, [Validators.required]],
		});
	}

	getTaskDetails(): void {
		this.route.data.subscribe({
			next: ({ task }) => {
				this.task = task;
				this.setFormValues();
				this.editBreadcrumb();
			},
		});
	}

	setFormValues(): void {
		this.taskForm.patchValue(this.task);
		this.getFormControl(this.taskForm, 'priority')?.setValue(
			this.task.priority
		);
	}

	editBreadcrumb(): void {
		this.breadcrumbData[
			this.breadcrumbData.length - 1
		].label = `Edit Task No. ${this.task.id}`;
	}

	onSubmit(): void {
		this.markControlsAsTouched(this.taskForm);

		if (this.taskForm.invalid) {
			return;
		}

		if (this.isEditPage && this.taskForm.pristine) {
			this.router.navigate(['/tasks', this.task.id]);
			return;
		}

		const { title, description, priority } = this.taskForm.value;

		const body: AddTaskBody = {
			title,
			description,
			priority,
		};

		let apiMethod: Observable<Task>;
		if (this.isEditPage) {
			body.updatedAt = new Date();
			apiMethod = this.tasksService.editTask(this.task.id, body);
		} else {
			// Just for MockAPI
			body.createdAt = new Date();
			body.updatedAt = new Date();
			apiMethod = this.tasksService.addTask(body);
		}

		this.isLoading = true;
		apiMethod.subscribe({
			next: (res) => {
				this.navigateBack();
				this.isLoading = false;
			},
			error: (err) => {
				this.isLoading = false;
				console.error('Error adding task', err);
			},
		});
	}

	onCancel(): void {
		this.navigateBack();
	}

	navigateBack(): void {
		const route = this.isEditPage ? ['/tasks', this.task.id] : ['/tasks'];
		this.router.navigate(route);
	}

	onReset(): void {
		this.taskForm.reset();
		this.getFormControl(this.taskForm, 'priority')?.setValue(
			TaskPriorityEnum.LOW
		);
	}
}
