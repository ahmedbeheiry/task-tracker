import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { switchMap, tap } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskFiltration } from '../../models/tasks-filtration.model';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
	tasks: Array<Task>;
	isLoading: boolean = false;
	filtrationData: TaskFiltration = {};

	constructor(private tasksService: TasksService, public dialog: Dialog) {}

	ngOnInit(): void {
		this.getAllTasks();
	}

	getAllTasks(): void {
		this.isLoading = true;
		this.tasksService.getAllTasks(this.filtrationData).subscribe({
			next: (res) => {
				this.tasks = res;
				this.isLoading = false;
			},
			error: (error) => {
				this.isLoading = false;
				this.tasks = [];
			},
		});
	}

	onDelete(task: Task): void {
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
					switchMap(() => this.tasksService.deleteTask(task.id))
				)
				.subscribe({
					next: () => {
						this.getAllTasks();
						modal.close();
					},
					error: (error) => {
						instance.isLoading = false;
					},
				});
		}
	}

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
	}

	onFiltration(data: any): void {
		this.filtrationData = data;
		this.getAllTasks();
	}
}
