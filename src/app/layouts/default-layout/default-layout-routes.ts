import { Routes } from '@angular/router';
import { HomeComponent } from '../../modules/core/components/home/home.component';

export const DEFAULT_ROUTES: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'tasks',
		loadChildren: () =>
			import('../../modules/tasks/tasks.module').then(
				(m) => m.TasksModule
			),
	},
];
