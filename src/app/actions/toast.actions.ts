import { createAction, props } from '@ngrx/store';
import { Toast } from "../models/toast.model"

export const displayToast = createAction(
    "[Toastr Notification] Display Success",
    props<{ toast : Toast }>()
);