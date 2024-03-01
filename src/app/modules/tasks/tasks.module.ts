import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksWrapperComponent } from './tasks-wrapper.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';
import { SharedModule } from '../../shared/shared.module';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

@NgModule({
	declarations: [
		TasksWrapperComponent,
		TasksComponent,
		TaskCardComponent,
		TaskFormComponent,
		TaskDetailsComponent,
	],
	imports: [
		CommonModule,
		TasksRoutingModule,
		ReactiveFormsModule,
		SharedModule,
		DragDropModule,
		DialogModule,
	],
})
export class TasksModule {}
