import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksWrapperComponent } from './tasks-wrapper.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskResolver } from './resolvers/task.resolver';

const routes: Routes = [
	{
		path: '',
		component: TasksWrapperComponent,
		children: [
			{
				path: '',
				component: TasksComponent,
			},
			{
				path: 'add',
				component: TaskFormComponent,
				data: { action: 'add' },
			},
			{
				path: ':id',
				component: TaskDetailsComponent,
				resolve: {
					task: TaskResolver,
				},
			},
			{
				path: ':id/edit',
				component: TaskFormComponent,
				resolve: {
					task: TaskResolver,
				},
				data: { action: 'edit' },
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TasksRoutingModule {}
