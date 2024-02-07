import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'child-to-parent';
  name="";
  parentFunction(data: { name: string; })
  {
    console.warn(data)
    this.name=data.name;
  }
}
