import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DEFAULT_ROUTES } from './layouts/default-layout/default-layout-routes';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { GUEST_ROUTES } from './layouts/guest-layout/guest-layout-routes';
import { GuestGuard } from './modules/core/guards/guest.guard';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: DefaultLayoutComponent,
		children: DEFAULT_ROUTES,
		canActivate: [AuthGuard],
	},
	{
		path: 'auth',
		component: GuestLayoutComponent,
		children: GUEST_ROUTES,
		canActivate: [GuestGuard],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
