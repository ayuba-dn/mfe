import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@mfe/shared/auth';

@Component({
  selector: 'mfe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser$ = this.authFacade.currentUser

  login(){
    this.authFacade.login()
  }
  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    console.log("hello")
  }
  
  
}
