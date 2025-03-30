import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
userName : string = 'Sherif';
userAge : number = 23;
student ={
  name: 'Sherif',
  age: 23,
  skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
  isActive: true,
  address: {
    city: 'Cairo',
    country: 'Egypt'
  }
}

}
