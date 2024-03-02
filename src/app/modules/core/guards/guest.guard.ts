import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../../../shared/services/storage.service';

export const GuestGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
	const router = inject(Router);
	const storageService = inject(StorageService);

	if (storageService.get('currentUser')) {
		// If user is logged in redirect to Home page
		router.navigate(['/']);
		return false;
	}
	return true; // Continue with the route activation process

};
