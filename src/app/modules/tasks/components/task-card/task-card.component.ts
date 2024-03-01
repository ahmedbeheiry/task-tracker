import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
	@Input() task: Task;
	@Output() deleteTask: EventEmitter<Task> = new EventEmitter<Task>();

	constructor(private router: Router) {}

	viewDetails(): void {
		this.router.navigate(['/tasks', this.task.id]);
	}

	onEdit(): void {
		this.router.navigate(['/tasks', this.task.id, 'edit']);
	}

	onDelete(): void {
		this.deleteTask.emit(this.task);
	}
}
