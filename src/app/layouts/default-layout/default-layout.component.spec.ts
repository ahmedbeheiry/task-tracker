import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutComponent } from './default-layout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DefaultLayoutComponent', () => {
	let component: DefaultLayoutComponent;
	let fixture: ComponentFixture<DefaultLayoutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DefaultLayoutComponent],
			imports: [RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(DefaultLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
