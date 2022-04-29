import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  myEditForm: FormGroup;
  taskRef:any;

  constructor(private taskService: TaskService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) { 
    this.myEditForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      description: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.taskService.getTasksById(id).subscribe( res => {
      this.taskRef = res
      this.myEditForm = this.formBuilder.group({
        title: [this.taskRef.title, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        description: [this.taskRef.description, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        state: [this.taskRef.state]
      });
    });
  }

  submit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.taskService.updateTask(this.myEditForm.value, id)
    this.router.navigate( ['tasks/lista'] ); 
  }

}
