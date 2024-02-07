import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit{

  @Output() parentFunction:EventEmitter<any>= new EventEmitter()

  constructor() { }
  
  ngOnInit(): void {
    
  }

  sendData()
  {
    let data={name:'sonia',age:23}
    this.parentFunction.emit(data)
  }

}
