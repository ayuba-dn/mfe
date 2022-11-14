import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { switchMap, map, catchError } from 'rxjs';
import { AuthApiService } from '../../api/auth-api.service';

import * as AuthActions from './auth.actions';
import * as AuthFeature from './auth.reducer';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
     this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action)=>
        this.authApiService.login().pipe(
          map(()=> AuthActions.loadAuthSuccess({auth: [{ id:23, name:"Ayuba"}]})
         // catchError((errors))
        )
      
      )
)))
   

  constructor(private readonly actions$: Actions, private authApiService: AuthApiService) {}
}
