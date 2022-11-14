import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';
import { AuthFacade } from './state/auth.facade';
import { HttpClientModule } from  '@angular/common/http';
import { AuthApiService } from '../api/auth-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
    HttpClientModule
  ],
  providers: [AuthFacade,AuthApiService],
})
export class AuthStoreModule {}
