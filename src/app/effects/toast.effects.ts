import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  add,
  remove,
  displaySuccess,
  displayInfo
} from "../actions/toast.actions";
import { exhaustMap, map, mapTo, tap, concatMap, mergeMap } from "rxjs/operators";
// import { ToastService } from "../services/toast.service"
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ToastEffects {

  toast: any;
  maxOpened: number = 3; //Change the value of this variable and also of forRoot value in order to change toastr MaxOpened value.
  counter = 0;

    // remove$ = createEffect(
    //   () =>
    //   this.actions$.pipe(
    //     ofType(remove),
    //     tap(action => {
    //       console.log(action.toastId);
    //       this.toast.clear(action.toastId)

    //       }
    //     )
    //   ),
    //   { dispatch: false }
    // )

    displaySuccess$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(displaySuccess),
            tap(action => 
              {
                if (this.counter < this.maxOpened) {
                  this.toast = this.toastService.success(action.toast.message, action.toast.title,
                    {
                      timeOut: action.toast.timeout,
                      // disableTimeOut: true,
                      positionClass: action.toast.position
                    }
                  )
                } else {
                  this.toastService.info("", "Grouped Notifications: " + (this.counter - this.maxOpened),
                    {
                      // timeOut: action.toast.timeout,
                      // disableTimeOut: true,
                      // positionClass: action.toast.position
                    }
                  )
                }
                
                this.toast.onShown.subscribe(() => {this.counter+=1; console.log(this.counter);})
                this.toast.onHidden.subscribe(() => {this.counter-=1; console.log(this.counter);})
            // subscribe(data => data.onShown.subscribe(() => displayInfo({toast: action.toast})))
                // .onShown.subscribe((action2) => displayInfo({toast: action.toast}))
              }
                  // this.toast.onHidden(map(s => new AddResult(Ok(s.id))))
                  // toast.onShown.subscribe((action) => console.log("Shown: ",this.counter+=1))
                  // toast.onHidden.subscribe((action) => console.log("Shown: ",this.counter-=1))
                  // toast.onHidden.subscribe(() => {
                  //   // console.log(this.toast.toastId)
                  //   remove({ toastId: this.toast.toastId })
                  // })
                // remove({ toastId: this.toast.toastId })
                  // setTimeout(() => 
                  //   toast.toastRef.componentInstance.message = "Hola mundo"
                  // , action.timeout); 
            )
        ),
        { dispatch: false }
    );

    displayInfo$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(displayInfo),
            tap(action => {
                this.toastService.info(action.toast.message, action.toast.title,
                  {
                    timeOut: action.toast.timeout,
                    // disableTimeOut: true,
                    positionClass: action.toast.position
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

    // add$ = createEffect(
    //     () =>
    //     this.actions$.pipe(
    //         ofType(add),
    //         map(action =>
    //           // {
    //             // displaySuccess({
    //             //   title: action.toast.title,
    //             //   message: action.toast.message,
    //             //   timeout: action.toast.timeout,
    //             //   position: action.toast.position
    //             // })
    //             // this.toast.onHidden.subscribe(() => {
    //             //   console.log(this.toast.toastId)
    //             //   // remove({ toastId: this.toast.toastId })
    //             // })

    //           // }
    //         )
    //     )
    // );
    
    constructor(private actions$: Actions, private toastService: ToastrService) {}
}
