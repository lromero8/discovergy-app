import { Injectable, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  // toasts: any[] = [];

  constructor(private toastr: ToastrService) {}

  show(config: any) {
    const toast = this.toastr.success(config.message, config.title, {
      timeOut: config.timeout,
      positionClass: config.position,
      enableHtml: true
    });
  }

  // show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
  //   this.toasts.push({ textOrTpl, ...options });
  // }

  // remove(toast: any) {
  //   this.toasts = this.toasts.filter(t => t !== toast);
  // }

}
