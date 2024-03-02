import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';

@NgModule({
	declarations: [AppComponent, DefaultLayoutComponent, GuestLayoutComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		CoreModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
