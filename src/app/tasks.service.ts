import {TaskComponent} from "./task/task.component";


export class TasksService{

  getDoing() : TaskComponent[]{
    let v = new TaskComponent();
    let doing: Array<TaskComponent> =[];
    v.taskTitle="esempio";
    v.taskDate="13/23/21"
    doing.push(v);
    doing.push(v);
    doing.push(v);

    return doing;
  }
  getDone() : TaskComponent[]{
    let v = new TaskComponent();
    let done : Array<TaskComponent> =[];
    done.push(v);
    return done;
  }

  getToDo() : TaskComponent[]{
    let todo : Array<TaskComponent> =[];
    return todo;
  }


}

