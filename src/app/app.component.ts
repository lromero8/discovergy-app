import { Component } from '@angular/core';

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


  toast : Toast = { 
    id: "",
    heading: "Toast",
    subheading: "Success",
    message: "This is my first toast",
    timeout: 2000,
    position: "top-right"
  }

  constructor(
    private store: Store<{ toastr: Toast }>
  ) {
    this.toastr$ = store.pipe(select('toastr'));
  }
  
  showStandard() {
    this.store.dispatch(add({toast: this.toast}));
    console.log(this.toastr$)
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
