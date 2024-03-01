import { TaskPriorityEnum } from '../enums/task-priority.enum';

export interface AddTaskBody {
	title: string;
	description: string;
	priority: TaskPriorityEnum;
	createdAt?: Date;
	updatedAt?: Date;
}
