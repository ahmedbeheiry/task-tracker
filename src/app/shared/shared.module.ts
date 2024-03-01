import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TaskPriorityComponent } from './components/task-priority/task-priority.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NoDataComponent } from './components/no-data/no-data.component';

@NgModule({
	declarations: [
		HeaderComponent,
		BreadcrumbComponent,
		SpinnerComponent,
		TaskPriorityComponent,
		ConfirmationDialogComponent,
		NoDataComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [
		HeaderComponent,
		BreadcrumbComponent,
		SpinnerComponent,
		TaskPriorityComponent,
		ConfirmationDialogComponent,
		NoDataComponent,
	],
})
export class SharedModule {}
