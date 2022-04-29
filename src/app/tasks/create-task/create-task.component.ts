import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  myForm: FormGroup;

  constructor(private taskService: TaskService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      description: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]]
    });
  }

  submit() {
    this.myForm.addControl('state', new FormControl(false));
    this.taskService.createTask(this.myForm.value);
    this.router.navigate( ['tasks/lista'] );
  }

}
