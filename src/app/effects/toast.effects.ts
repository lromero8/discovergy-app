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
                    classname: action.class,
                    delay: action.delay,
                    autohide: action.autohide,
                    headertext: action.header
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
                header: action.toast.header,
                class: action.toast.class,
                autohide: action.toast.autohide,
                delay: action.toast.delay,
                message: action.toast.message
              })
            )
        )
    );
    
    constructor(private actions$: Actions, private toastService: ToastService) {}
}
