import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { Task } from '../models/task.model';
import { inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { EMPTY, catchError } from 'rxjs';

export const TaskResolver: ResolveFn<Task> = (
	route: ActivatedRouteSnapshot
) => {
	const id = route.paramMap.get('id') as string;
	const tasksService = inject(TasksService);
	const router = inject(Router);

	return tasksService.getTask(id).pipe(
		catchError((error) => {
			router.navigate(['/tasks']);
			return EMPTY;
		})
	);
};
