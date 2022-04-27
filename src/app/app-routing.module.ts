import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy loading
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksModule )
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
