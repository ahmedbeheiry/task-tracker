import { Routes } from '@angular/router';

export const GUEST_ROUTES: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('../../modules/auth/auth.module').then((m) => m.AuthModule),
	},
];
