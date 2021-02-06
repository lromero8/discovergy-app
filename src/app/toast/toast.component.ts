import { Component, EventEmitter, Input, Output, ViewChild  } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-toasts',
  template: `

    <h6>Grouped Notifications: <span class="badge bg-primary">New</span></h6>


  `
})
export class ToastComponent {
  // @Input() toastr!: any;
  // @Output() grouped = new EventEmitter<boolean>();
  // counter : number = 0;
  // toastContainer!: ToastContainerDirective;
  count = 0
  undoString = 'undo';


  // constructor(
  //   protected toastrService: ToastrService,
  //   public toastPackage: ToastPackage,
  // ) {
  //   super(toastrService, toastPackage);
  // }


  // action(event: Event) {
  //   event.stopPropagation();
  //   this.toastPackage.triggerAction();
  //   return false;
  // }


  // toastrCounter(num: number){
  //   num == 1?this.counter++:this.counter--;

  //   this.counter>=5?this.groupToastr(true):this.groupToastr(false);

  //   console.log(this.counter)
  // }


  // groupToastr(value: boolean) {
  //   this.grouped.emit(value);
  // }


}
