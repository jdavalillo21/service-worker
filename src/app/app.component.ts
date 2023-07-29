import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  isOnline: boolean = navigator.onLine;

  constructor(
    private router: Router,
    private http: HttpClient
  ){
    if(!window.navigator.onLine){
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(){
    this.getDataFromServer();
  }

  getDataFromServer() {
    const url = this.router.url;
    this.http.get(url)
      .pipe(
        tap((data: any) => {
          console.log('conectado', data);
        }),
        catchError((error: any) => {
          this.router.navigate(['/error']);
          return [];
        })
      )
      .subscribe();
  }


  @HostListener('window:offline', ['$event'])
  onOffline(event: Event) {
    this.isOnline = false;
    this.router.navigate(['/error']);
  }
}
