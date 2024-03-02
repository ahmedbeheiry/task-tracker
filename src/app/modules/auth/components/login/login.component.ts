import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateFormControl } from '../../../../shared/helpers/form-validator';
import { StorageService } from '../../../../shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent extends ValidateFormControl implements OnInit {
	loginForm: FormGroup;
	isLoading: boolean = false;
	errorMsg = '';
	correctMail = 'admin@abtask.com';
	correctPassword = 'admin';

	constructor(
		private fb: FormBuilder,
		private storage: StorageService,
		private router: Router
	) {
		super();
	}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
		this.loginForm = this.fb.group({
			email: [null, [Validators.required]],
			password: [null, [Validators.required]],
		});
	}

	onSubmit(): void {
		this.markControlsAsTouched(this.loginForm);

		if (this.loginForm.invalid) {
			return;
		}

		const { email, password } = this.loginForm.value;

		this.isLoading = true;
		this.errorMsg = '';

		setTimeout(() => {
			if (
				email === this.correctMail &&
				password === this.correctPassword
			) {
				this.isLoading = false;
				const currentUser = {
					email,
					name: 'Admin',
				};
				this.storage.set('currentUser', JSON.stringify(currentUser));
				this.router.navigate(['/']);
			} else {
				this.errorMsg = 'Incorrect username or password!';
				this.isLoading = false;
			}
		}, 1000);
	}
}
