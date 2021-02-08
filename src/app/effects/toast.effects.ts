import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { displayToast } from "../actions/toast.actions";
import { map, tap } from "rxjs/operators";
import { ToastService } from "../services/toast.service"

@Injectable()
export class ToastEffects {

    displayToast$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(displayToast),
            tap(action => {
                this.toastService.show(action.toast.message, {
                    classname: action.toast.class,
                    delay: action.toast.delay,
                    autohide: action.toast.autohide,
                    headertext: action.toast.header
                  });
            })
        ),
        { dispatch: false }
    );
    
    constructor(private actions$: Actions, private toastService: ToastService) {}
}
