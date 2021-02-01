import { Component, DoBootstrap } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add } from './actions/toast.actions';
import { Toast } from "./models/toast.model"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discovergy-app';

  toastr$: Observable<Toast>;

  wrapped = false;

  successToast : Toast = {
    header: "Toast",
    class: "bg-success text-light",
    autohide: true,
    delay: 10000,
    message: "This is my success toast, it will disappear in 10 seconds"
  }

  warningToast : Toast = {
    header: "Toast",
    class: "bg-warning text-light",
    autohide: true,
    // delay: 5000,
    message: "This is my warning toast, it will disappear in 5 seconds (that's the default)"
  }

  errorToast : Toast = {
    header: "Toast",
    class: "bg-danger text-light",
    autohide: true,
    delay: 3000,
    message: "This is my danger toast, it will disappear in 3 seconds"
  }

  
  constructor(
    private store: Store<{ toastr: Toast }>
    ) {
    this.toastr$ = this.store.pipe(select('toastr'));
    console.log(this.toastr$);
  }
  
  showSuccess() {
    this.store.dispatch(add({toast: this.successToast}));
  }

  showWarning() {
    this.store.dispatch(add({toast: this.warningToast}));
  }

  showError() {
    this.store.dispatch(add({toast: this.errorToast}));
  }

  wrappingToastr(value: boolean){
    value?this.wrapped = true: this.wrapped = false;
    // console.log(value)
  }

  // showStandard() {
  //   this.toastService.show('I am a standard toast', {
  //     delay: 2000,
  //     autohide: true
  //   });
  // }

  // showSuccess() {
  //   this.toastService.show('I am a success toast', {
  //     classname: 'bg-success text-light',
  //     delay: 2000 ,
  //     autohide: true,
  //     headertext: 'Toast Header'
  //   });
  // }


  // showError() {
  //   this.toastService.show('I am a success toast', {
  //     classname: 'bg-danger text-light',
  //     delay: 2000 ,
  //     autohide: true,
  //     headertext: 'Error!!!'
  //   });
  // }

  // showCustomToast(customTpl: any) {
  //   this.toastService.show(customTpl, {
  //     classname: 'bg-info text-light',
  //     delay: 3000,
  //     autohide: true
  //   });
  // }


}
