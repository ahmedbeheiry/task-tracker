import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { AddTaskBody } from '../models/add-task.model';
import { createQueryString } from '../../../shared/helpers/http-params-methods';
import { TaskFiltration } from '../models/tasks-filtration.model';

@Injectable({
	providedIn: 'root',
})
export class TasksService {
	constructor(private http: HttpClient) {}

	getAllTasks(body: TaskFiltration = {}): Observable<Array<Task>> {
		const params = createQueryString(body);
		return this.http.get<Array<Task>>(`${environment.apiBaseURL}/tasks?${params}`);
	}

	getTask(id: string): Observable<Task> {
		return this.http.get<Task>(`${environment.apiBaseURL}/tasks/${id}`);
	}

	addTask(body: AddTaskBody) {
		return this.http.post<Task>(`${environment.apiBaseURL}/tasks`, body);
	}

	editTask(id: string, body: AddTaskBody) {
		return this.http.put<Task>(
			`${environment.apiBaseURL}/tasks/${id}`,
			body
		);
	}

	deleteTask(id: string) {
		return this.http.delete<Task>(`${environment.apiBaseURL}/tasks/${id}`);
	}
}
