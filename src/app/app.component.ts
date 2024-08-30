import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { SpinnersComponent } from './spinners/spinners.component';

interface task{
  taskTitle: string;
  taskDescription: string;
  taskStatus: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ReactiveFormsModule, JsonPipe, SpinnersComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller';
  public tasksArray: task[] = [];

  public taskTitle!: FormControl;
  public taskDescription!: FormControl;
  public taskStatus!: FormControl;
  

  public form!: FormGroup;

  constructor(){
    this.inicializadorForm();
  }

  public saveTask(){
    this.tasksArray.push(this.form.value);
    console.log(this.tasksArray);
    this.form.reset();
    this.inicializadorForm();
  }

  public editTask(id: number){
    console.log(id);
  }

  public changeStatusTask(id: number){
    console.log(id);
    const newTaskArray: task[] = [];
    for (let i = 0; i < this.tasksArray.length; i++){  
      const element = this.tasksArray[i];
      if(i == id){
        element.taskStatus = "true";
        newTaskArray.push(element);
      }
      newTaskArray.push(element);
    }
  }


  public inicializadorForm(){
    this.taskTitle = new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
    this.taskDescription = new FormControl("" ,[Validators.required, Validators.minLength(10), Validators.maxLength(100)]);
    this.taskStatus = new FormControl("false");
  
  // agrupar contenedores.
  this.form = new FormGroup({taskTitle: this.taskTitle, taskDescription: this.taskDescription, taskStatus: this.taskStatus})
  
  }
}
