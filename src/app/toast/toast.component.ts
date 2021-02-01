import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-toasts',
  template: `
  <h5 *ngIf='this.counter>=5'>Toast: <span class="badge badge-primary">{{this.counter}}</span></h5>
    <ngb-toast
      *ngFor="let toast of toastr"
      [header]="toast.header"
      [class]="toast.class"
      [autohide]="toast.autohide"
      [delay]="toast.delay || 5000"
      (shown)="toastrCounter(1)"
      (hidden)="toastrCounter(-1)"
    >
      {{ toast.message }}
    </ngb-toast>
  `,
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent {
  @Input() toastr!: any;
  @Output() grouped = new EventEmitter<boolean>();
  counter : number = 0;


  toastrCounter(num: number){
    num == 1?this.counter++:this.counter--;

    this.counter>=5?this.groupToastr(true):this.groupToastr(false);

    console.log(this.counter)
  }


  groupToastr(value: boolean) {
    this.grouped.emit(value);
  }


}
