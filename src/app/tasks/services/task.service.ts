import { Injectable } from '@angular/core';

// Para trabajar con FireStore
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { rejects } from 'assert';

// Model
import { Task } from '../models/task.model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private angularFirestore: AngularFirestore) { }

  // Obtener todas las tareas
  getTasks(){
    return this.angularFirestore
      .collection("tasks")
      .snapshotChanges()
  }

  // obtener las tareas por id
  getTasksById(id){
    return this.angularFirestore
    .collection("tasks")
    .doc(id)
    .valueChanges()
  }

  // Crear una nueva tarea
  createTask(task: Task){
    return new Promise<any> ( ( resolve, reject ) => {
      this.angularFirestore
      .collection("tasks")
      .add(task)
      .then( (response) => {
        console.log(response);
      },
      (error) => {
        reject(error)
      });
    });
  }

  // Editar una tarea
  updateTask(task: Task, id){
    return this.angularFirestore
    .collection("tasks")
    .doc(id)
    .update({
      title: task.title,
      description: task.description,
      state: task.state
    });
  }

  // Eliminar una tarea
  deleteTask(task){
    return this.angularFirestore
    .collection("tasks")
    .doc(task.id)
    .delete();
  }
}
