import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AppComponent, CardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() taskTitleCard: string = "";
@Input() taskDescriptionCard: string = "";
@Input() taskStatusCard: string = "false";
@Input() taskNumberCard: number = 0;
@Input() taskIDCard: number = 0;

@Output() doClick = new EventEmitter();


public getTaskNumber(){
  this.doClick.emit(this.taskIDCard)
}
}
