import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // Instead of using styleUrls, we can hard type in the styling
  styles: [`
    h3 {
      color: darkred;
    }
  `]
})
export class AppComponent {
  name = 'Constantine Akritides';
}
