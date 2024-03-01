import { TaskPriorityEnum } from '../enums/task-priority.enum';

export interface Task {
	createdAt: Date;
	updatedAt: Date;
	title: string;
	description: string;
	priority: TaskPriorityEnum;
	id: string;
}
