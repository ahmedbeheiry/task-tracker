import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, filter, debounceTime, map, switchMap, of } from 'rxjs';
import { TaskPriorityEnum } from '../../enums/task-priority.enum';
import { TaskFiltration } from '../../models/tasks-filtration.model';

@Component({
	selector: 'app-tasks-filtration',
	templateUrl: './tasks-filtration.component.html',
	styleUrl: './tasks-filtration.component.scss',
})
export class TasksFiltrationComponent implements OnInit {
	filtrationForm: FormGroup;
	taskPriorityEnum = TaskPriorityEnum;

	@Output() filtrationValue: EventEmitter<any> = new EventEmitter<any>();

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.formInit();
		this.onFiltration();
	}

	formInit(): void {
		this.filtrationForm = this.fb.group({
			title: [''],
			priority: [''],
			order: [''],
		});
	}

	onFiltration(): void {
		this.filtrationForm.valueChanges
			.pipe(
				tap((formValue) => {
					return formValue;
				}),
				filter(() => this.filtrationForm.valid),
				debounceTime(1000),
				map((formValue) => {
					formValue.title = formValue.title.trim();
					return formValue;
				}),
				switchMap((formValue) => of(formValue))
			)
			.subscribe((res) => {
				const filtrationData: TaskFiltration = {
					...res
				}
				if (res.order) {
					filtrationData.orderBy = 'createdAt'
				}
				this.filtrationValue.emit(filtrationData);
			});
	}
}
