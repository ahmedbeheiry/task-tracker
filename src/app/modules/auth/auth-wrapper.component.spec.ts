import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthWrapperComponent } from './auth-wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthWrapperComponent', () => {
	let component: AuthWrapperComponent;
	let fixture: ComponentFixture<AuthWrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AuthWrapperComponent],
			imports: [RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(AuthWrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
