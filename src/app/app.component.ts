import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';

  constructor(
    private router: Router
  ){
    if(!window.navigator.onLine){
      this.router.navigate(['/error']);
    }
  }
}
