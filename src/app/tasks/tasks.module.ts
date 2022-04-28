import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MaterialModule } from '../material/material.module';
import { ButtonCreateComponent } from './button-create/button-create.component';

@NgModule({
  declarations: [
    CreateTaskComponent,
    UpdateTaskComponent,
    TaskListComponent,
    ButtonCreateComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
  ]
})
export class TasksModule { }
