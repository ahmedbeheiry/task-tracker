import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
	selector: 'app-confirmation-dialog',
	templateUrl: './confirmation-dialog.component.html',
	styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent implements OnInit {
	@Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
	isLoading = false;
	errorMessage = '';

	constructor(
		public dialogRef: DialogRef<ConfirmationDialogComponent>,
		@Inject(DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {}

	onConfirm() {
		this.confirm.emit(true);
	}
}
