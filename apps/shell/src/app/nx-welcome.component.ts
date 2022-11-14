import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthFacade } from '@mfe/shared/auth';

/* eslint-disable */

@Component({
  selector: 'mfe-nx-welcome',
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    
     HomePage!!!

     <p>home works!</p>
<button (click)="login()">login</button>
<h1>Current User: {{ (currentUser$ | async)?.name }}</h1> 
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {}

  currentUser$ = this.authFacade.currentUser

  login(){
    this.authFacade.login()
  }
}
