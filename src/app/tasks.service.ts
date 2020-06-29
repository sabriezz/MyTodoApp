import {TaskComponent} from "./task/task.component";
export class TasksService{

  getDoing() : TaskComponent[]{
    let doing: Array<TaskComponent> =[];
    if (JSON.parse(localStorage.getItem('doing'))!==null){
      doing=JSON.parse(localStorage.getItem('doing'));
    }
    return doing;
  }
  getDone() : TaskComponent[]{
    let done : Array<TaskComponent> =[];

    if (JSON.parse(localStorage.getItem('done'))!==null){
      done=JSON.parse(localStorage.getItem('done'));
    }
    return done;
  }

  getToDo() : TaskComponent[]{
    let todo : Array<TaskComponent> =[];
    if (JSON.parse(localStorage.getItem('todo'))!==null){
      todo=JSON.parse(localStorage.getItem('todo'));
    }
    return todo;
  }

}
