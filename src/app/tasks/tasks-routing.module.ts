import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component'
import { TaskListComponent } from './task-list/task-list.component'
import { UpdateTaskComponent } from './update-task/update-task.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'lista', component: TaskListComponent},
      { path: 'añadir', component: CreateTaskComponent},
      { path: 'editar/:id', component: UpdateTaskComponent},
      { path: '**', redirectTo: 'lista'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
