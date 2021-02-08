import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-toasts',
  template: `
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
  <div *ngIf='this.queque>0' class="alert alert-primary">
    Grouped Notifications: <span class="badge bg-primary text-white">{{ this.queque }}</span>
  </div>
  `,
  host: {'[class.ngb-toasts]': 'true'}
})

export class ToastComponent {
  @Input() toastr!: any;
  @Input() queque!: number;
  @Output() counter = new EventEmitter<number>();
  tempCounter : number = 0;


  toastrCounter(num: number){
    num == 1?this.tempCounter++:this.tempCounter--;

    this.groupToastr(this.tempCounter)

    // console.log(this.tempCounter)
  }

  groupToastr(value: number) {
    this.counter.emit(value);
  }


}
