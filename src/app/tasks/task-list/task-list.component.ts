import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  Tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe( (res) => {
      this.Tasks = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Task)
        }
      });
    });
    
  }

  deleteRow = (task) => this.taskService.deleteTask(task);
  displayedColumns: string[] = ['title', 'description', 'state', 'action'];
}