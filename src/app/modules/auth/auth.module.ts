import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthWrapperComponent } from './auth-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AuthWrapperComponent, LoginComponent],
	imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
