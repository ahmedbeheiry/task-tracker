import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { DialogRef, DialogModule, DIALOG_DATA } from '@angular/cdk/dialog';

describe('ConfirmationDialogComponent', () => {
	let component: ConfirmationDialogComponent;
	let fixture: ComponentFixture<ConfirmationDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfirmationDialogComponent],
			imports: [DialogModule],
			providers: [
				{ provide: DIALOG_DATA, useValue: {} },
				{ provide: DialogRef, useValue: {} },
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfirmationDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
