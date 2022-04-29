# DAW II - ToDoList con Lazy Load (CRUD)

### Autor del proyecto

Danilo Rivero Pérez - Grado en Ingeniería Informática - DAW II.

### Descripción de la aplicación

Se ha creado una aplicación que gestiona las tareas del día a día (ToDoList). Las tareas se guardan en una base de datos (```FireStore```) y además se ha hecho uso de la carga perezoza (```lazy load```) para mejorar el rendimiento de la aplicación. Con esta aplicación, se pueden crear nuevas tareas, editar las tareas, eliminar tareas, ver el listado de tareas y completar o descompletar tareas pendientes o completadas, respectivamente. Para la realización de este proyecto se ha usado [Angular](https://angular.io/) y para maquetar el diseño del proyecto, se ha usado [Material](https://material.io/). Además, se ha hecho uso de una base de datos de Firebase como es [FireStore](https://cloud.google.com/firestore?hl=es-419).

Las funcionalidades de la aplicación son:

- Permite ```listar``` todas las tareas completadas y pendientes.
- Permite ```crear``` nuevas tareas.
- Permite ```editar``` tareas.
- Permite ```eliminar``` tareas.
- Permite ```completar``` tareas.
- Permite ```descompletar``` tareas.


### Ejecutar el proyecto

Para ejecutar este proyecto en ***local*** se deben seguir los siguientes pasos:

  1. Ejecutar en la terminal desde la ruta del proyecto, el comando: ```mpm install``` para instalar todas las dependencias del proyecto en Angular.
  2. Ejecutar desde la terminal, el servidor local con el comando: ```ng serve --open```
  3. Se abrirá en un navegador el proyecto realizado a través de la URL ```localhost:nºpuerto```
  
### Hosting de alojamiento del proyecto

Podrá ver el proyecto de la ToDo List realizada [aquí](https://todolist-dawii.netlify.app/).

## Tecnologías utilizadas en el Proyecto

| Tecnologías                                                           | Descripción                               |
| --------------------------------------------------------------------- | ----------------------------------------- |
| **[Angular](https://angular.io/)**                                    | Framework de JavaScript                   |
| **[TypeScript](https://www.typescriptlang.org/)**                     | Superset de Javascript con tipado         |
| **[Material](https://material.io/)**                                  | Librería de diseño de Angular             |
| **[Firebase](https://console.firebase.google.com/)**                  | Base de datos de documentos de Google     |
