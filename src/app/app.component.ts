import { Component, DoBootstrap } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { displayToast } from './actions/toast.actions';
import { Toast } from "./models/toast.model"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discovergy-app';

  toastr$: Observable<Toast>;

  counter = 0;

  queue:any = [];

  maxOpened: number = 3;

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
    // console.log(this.toastr$);
  }
  
  showSuccess() {
    if (this.counter >= this.maxOpened) {
      this.queue.push(this.successToast)
      // console.log("queue array: ", this.queue.length);
    } else {
      this.store.dispatch(displayToast({toast: this.successToast}));
    }
  }

  showWarning() {
    if (this.counter >= this.maxOpened) {
      this.queue.push(this.warningToast)
      // console.log("queue array: ", this.queue.length);
    } else {
      this.store.dispatch(displayToast({toast: this.warningToast}));
    }
  }

  showError() {
    if (this.counter >= this.maxOpened) {
      this.queue.push(this.errorToast)
      // console.log("queue array: ", this.queue.length);
    } else {
      this.store.dispatch(displayToast({toast: this.errorToast}));
    }
  }

  wrappingToastr(value: number){
    this.counter = value;
    console.log(this.toastr$);

    if (this.counter == (this.maxOpened - 1) && this.queue.length!=0) {
      this.store.dispatch(displayToast({toast: this.queue.shift()}))
      console.log("Queue: ", this.queue.length)
    }
  }

}
