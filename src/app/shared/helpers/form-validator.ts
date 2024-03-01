import { AbstractControl, FormGroup } from '@angular/forms';

export class ValidateFormControl {
	validateFormControl(
		form: FormGroup,
		formControlName: string,
		formGroupName?: string,
		errorName?: string
	): boolean | null | undefined {
		if (formGroupName) {
			const control = form.get(formGroupName)?.get(formControlName);
			if (errorName) {
				return (
					control && control.touched && control.hasError(errorName)
				);
			}
			return control && control.touched && control.invalid;
		} else {
			if (errorName) {
				return (
					form.get(formControlName) &&
					this.getFormControl(form, formControlName)?.touched &&
					this.getFormControl(form, formControlName)?.hasError(
						errorName
					)
				);
			}
			return (
				form.get(formControlName) &&
				this.getFormControl(form, formControlName)?.touched &&
				this.getFormControl(form, formControlName)?.invalid
			);
		}
	}

	// mark all controllers as touched
	markControlsAsTouched(form: FormGroup): void {
		const formControls = form.controls;

		for (const [, control] of Object.entries(formControls)) {
			if (control instanceof FormGroup) {
				for (const [, ctrl] of Object.entries(control.controls)) {
					ctrl.markAsTouched();
					this.trimValue(ctrl);

					if (
						ctrl.value &&
						typeof control.value === 'string' &&
						ctrl.value.trim() === ''
					) {
						ctrl.setValue('');
					}
				}
			} else {
				control.markAsTouched();
				this.trimValue(control);

				if (
					control.value &&
					typeof control.value === 'string' &&
					control.value.trim() === ''
				) {
					control.setValue('');
				}
			}
		}
	}

	getFormControl(
		form: FormGroup,
		formControlName: string
	): AbstractControl | null {
		return form.get(formControlName);
	}

	trimValue(control: AbstractControl): void {
		if (typeof control.value === 'string') {
			control.setValue(control.value.trim());
		}
	}
}
