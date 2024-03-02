import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	get currentUser() {
		return this.storage.get('currentUser');
	}
	constructor(
		private storage: StorageService,
		private router: Router,
		private dialog: Dialog
	) {}

	onLogin(): void {
		this.router.navigate(['/auth/login']);
	}

	logout(): void {
		this.storage.remove('currentUser');
		this.onLogin();
	}

	onLogout(): void {
		const modal = this.dialog.open(ConfirmationDialogComponent, {
			minWidth: 380,
			data: {
				message: `Are you sure you want to Logout?`,
			},
		});
		const instance = modal.componentInstance;
		if (instance) {
			instance.confirm.subscribe({
				next: () => {
					this.logout();
					modal.close();
				},
			});
		}
	}
}
