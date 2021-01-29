import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';
import { StoreModule } from "@ngrx/store";
import { toastReducer } from "./reducers/toast.reducer"
import { EffectsModule } from "@ngrx/effects";
import { ToastEffects } from "./effects/toast.effects";


@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    EffectsModule.forRoot([ToastEffects]),
    StoreModule.forRoot({
      toastr: toastReducer
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
