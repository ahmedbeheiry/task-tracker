import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../../../shared/services/storage.service';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
	const router = inject(Router);
	const storageService = inject(StorageService);

	if (!storageService.get('currentUser')) {
		// If user is not logged in redirect to Auth
		router.navigate(['/auth']);
		return false;
	}
	return true; // Continue with the route activation process
};
