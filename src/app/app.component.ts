import { Component, DoBootstrap } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, displaySuccess } from './actions/toast.actions';
import { Toast } from "./models/toast.model"
import { ToastrService } from 'ngx-toastr';
import { ToastComponent } from './toast/toast.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discovergy-app';

  toastr$: Observable<Toast>;

  wrapped = false;

  id = 0;

  successToast : Toast = {
    id: 0,
    type: "success",
    title: "Success!",
    message: "Success toast, it will disappear in 3 seconds <h5>hello<h5>",
    timeout: 3000,
    position: "toast-top-right"
  }

  // warningToast : Toast = {
  //   header: "Toast",
  //   class: "bg-warning text-light",
  //   autohide: true,
  //   // delay: 5000,
  //   message: "Warning toast, it will disappear in 5 seconds (that's the default)"
  // }

  // errorToast : Toast = {
  //   header: "Toast",
  //   class: "bg-danger text-light",
  //   autohide: true,
  //   delay: 3000,
  //   message: "Danger toast, it will disappear in 3 seconds"
  // }

  
  constructor(
    private store: Store<{ toastr: Toast }>,
    private toastr: ToastrService
    ) {
    this.toastr$ = this.store.pipe(select('toastr'));
    
    console.log(this.toastr$);
  }
  
  showSuccess() {

    if (!this.wrapped) {

      this.successToast.id = this.id+=1;
      // console.log(this.successToast)
      // this.successToast.id = this.id++;
      this.store.dispatch(displaySuccess({ toast: this.successToast }));
      // this.store.dispatch(add({toast: this.successToast}));

      this.successToast = {
        id: '',
        type: "success",
        title: "Success!",
        message: "Success toast, it will disappear in 3 seconds <h5>hello<h5>",
        timeout: 3000,
        position: "toast-top-right"
      };

    }
    // this.toastr.success('Hello world!', 'Toastr fun!', {
    //   // toastComponent: ToastComponent
    // });


  }

  // showWarning() {
  //   this.store.dispatch(add({toast: this.warningToast}));
  // }

  // showError() {
  //   this.store.dispatch(add({toast: this.errorToast}));
  // }

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
