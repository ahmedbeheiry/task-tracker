import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskPriorityEnum } from '../../../modules/tasks/enums/task-priority.enum';

@Component({
	selector: 'app-task-priority',
	templateUrl: './task-priority.component.html',
	styleUrl: './task-priority.component.scss',
})
export class TaskPriorityComponent implements OnChanges {
	@Input() priority: TaskPriorityEnum;
	priorityStatus: {
		text: string;
		className: string;
	};

	ngOnChanges(changes: SimpleChanges): void {
		const priority = changes['priority']?.currentValue;
		if (priority) {
			switch (priority) {
				case TaskPriorityEnum.LOW:
					this.priorityStatus = {
						text: 'Low',
						className: 'text-bg-primary'
					}
					break;
				case TaskPriorityEnum.MEDIUM:
					this.priorityStatus = {
						text: 'Medium',
						className: 'text-bg-warning'
					}
					break;
				case TaskPriorityEnum.HIGH:
					this.priorityStatus = {
						text: 'High',
						className: 'text-bg-danger'
					}
					break;
			
				default:
					break;
			}
		}
	}
}
