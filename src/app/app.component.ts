import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  isOnline: boolean = navigator.onLine;

  constructor(
    private router: Router
  ){
    if(!window.navigator.onLine){
      this.router.navigate(['/error']);
    }
  }


  @HostListener('window:offline', ['$event'])
  onOffline(event: Event) {
    this.isOnline = false;
    this.router.navigate(['/error']);
  }
}
