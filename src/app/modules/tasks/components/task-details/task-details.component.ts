import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../shared/models/breadcrumb.model';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { switchMap, tap } from 'rxjs';

@Component({
	selector: 'app-task-details',
	templateUrl: './task-details.component.html',
	styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent implements OnInit {
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
			label: 'Task Details',
			url: '',
		},
	];
	task: Task;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public dialog: Dialog,
		private tasksService: TasksService
	) {}

	ngOnInit(): void {
		this.getTaskDetails();
	}

	getTaskDetails(): void {
		this.route.data.subscribe({
			next: ({ task }) => {
				this.task = task;
				this.editBreadcrumb();
			},
		});
	}

	editBreadcrumb(): void {
		this.breadcrumbData[
			this.breadcrumbData.length - 1
		].label = `Task No. ${this.task.id}`;
	}

	onEdit(): void {}
	onDelete(): void {
		const modal = this.dialog.open(ConfirmationDialogComponent, {
			minWidth: 380,
			data: {
				message: `Are you sure you want to delete that task?`,
			},
		});
		const instance = modal.componentInstance;
		if (instance) {
			instance.confirm
				.pipe(
					tap(() => (instance.isLoading = true)),
					switchMap(() => this.tasksService.deleteTask(this.task.id))
				)
				.subscribe({
					next: () => {
						modal.close();
						this.router.navigate(['/tasks']);
					},
					error: (error) => {
						instance.isLoading = false;
					},
				});
		}
	}
}
