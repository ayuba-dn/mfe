import { Component } from '@angular/core';
import { AuthFacade } from '@mfe/shared/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'mfe-auth-entry',
  templateUrl: './remote-entry.html',
})
export class RemoteEntryComponent {
  constructor(private authFacade: AuthFacade){

  }
  currentUser$ = this.authFacade.currentUser

  login(){
    this.authFacade.login()
  }
}
