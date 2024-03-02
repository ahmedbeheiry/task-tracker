import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
	TestRequest,
} from '@angular/common/http/testing';
import { TasksService } from './tasks.service';
import { take } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../../../environments/environment.development';
import { TaskPriorityEnum } from '../enums/task-priority.enum';

describe('TasksService', () => {
	let service: TasksService;
	let controller: HttpTestingController;
	let url = `${environment.apiBaseURL}/tasks?`;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [TasksService],
		});
		service = TestBed.inject(TasksService);
		controller = TestBed.inject(HttpTestingController);
	});

	beforeEach((): void => {
		controller.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('be able to retrieve posts from the API bia GET', () => {
		const dummyPosts: Task[] = [
			{
				createdAt: new Date('2024-03-01T23:25:45.664Z'),
				title: 'Task Context',
				description:
					'The context includes what the Task is about, and why it has to exist. Tell them the reason for creating it, how this Task will contribute to the Project. Finally, tell them what they must do. All this will help them to understand the Task, and feel motivated to do it well.',
				priority: TaskPriorityEnum.HIGH,
				updatedAt: new Date('2024-03-01T23:46:24.120Z'),
				id: '4',
			},
			{
				createdAt: new Date('2024-03-01T23:47:26.079Z'),
				title: 'Task Types',
				description:
					'Task Types are saved definitions of commonly performed tasks. They identify and categorize tasks commonly performed during a business process, for example, Data Entry or General Ledger Extract.',
				priority: TaskPriorityEnum.LOW,
				updatedAt: new Date('2024-03-01T23:47:26.079Z'),
				id: '5',
			},
		];
		service.getAllTasks().subscribe((tasks) => {
			expect(tasks.length).toBe(2);
			expect(tasks).toEqual(dummyPosts);
		});
		const request = controller.expectOne(url);
		expect(request.request.method).toBe('GET');
		request.flush(dummyPosts);
	});
});
