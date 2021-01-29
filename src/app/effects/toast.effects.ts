import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  add,
  displaySuccess
} from "../actions/toast.actions";
import { map, tap } from "rxjs/operators";
import { ToastService } from "../services/toast.service"

@Injectable()
export class ToastEffects {

    displaySuccess$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(displaySuccess),
            tap(action => {
                this.toastService.show(action.message, {
                    classname: 'bg-success text-light',
                    delay: action.timeout,
                    autohide: true,
                    headertext: action.heading
                  });
            })
        ),
        { dispatch: false }
    );

    // displayWarning$ = createEffect(
    //     () =>
    //     this.actions$.pipe(
    //         ofType(displayWarning),
    //         tap(action => {
    //             this.toastService.show(action.message, {
    //                 classname: 'bg-warning text-light',
    //                 delay: action.timeout ,
    //                 autohide: true,
    //                 headertext: action.heading
    //               });
    //         })
    //     ),
    //     { dispatch: false }
    // );

    // displayError$ = createEffect(
    //     () =>
    //     this.actions$.pipe(
    //         ofType(displayError),
    //         tap(action => {
    //             this.toastService.show(action.message, {
    //                 classname: 'bg-danger text-light',
    //                 delay: action.timeout ,
    //                 autohide: true,
    //                 headertext: action.heading
    //               });
    //         })
    //     ),
    //     { dispatch: false }
    // );

    add$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(add),
            map(action =>
              displaySuccess({
                heading: action.toast.heading,
                subheading: action.toast.subheading,
                message: action.toast.message,
                timeout: action.toast.timeout,
                position: action.toast.position
              })
            )
        )
    );
    
    constructor(private actions$: Actions, private toastService: ToastService) {}
}
