import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  flag = false;  
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

  taskComplete(element){
    var check = document.getElementById(element.id) as HTMLButtonElement;
    var description = document.getElementById("desc"+element.id) as HTMLTableCellElement;
    var title = document.getElementById("tit"+element.id) as HTMLTableCellElement;

    if(check.innerText === "check"){
      check.style.background = 'black';
      check.innerHTML = "cancel";
      description.style.textDecoration = "line-through";
      title.style.textDecoration = "line-through";
    } else {
      check.style.background = "rgb(80, 70, 70)";
      check.innerHTML = "check";
      description.style.textDecoration = "none"; 
      title.style.textDecoration = "none";
    }
  }

  
 
}