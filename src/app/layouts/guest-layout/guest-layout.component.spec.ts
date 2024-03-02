import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLayoutComponent } from './guest-layout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GuestLayoutComponent', () => {
  let component: GuestLayoutComponent;
  let fixture: ComponentFixture<GuestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestLayoutComponent],
	  imports: [RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
