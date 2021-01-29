import { createAction, props } from '@ngrx/store';
import { Toast } from "../models/toast.model"

export const add = createAction(
    "[ Add Toast] Add",
    props<{ toast : Toast }>()
);

// export const remove = createAction(
//     "[ Remove Toastr] Remove",
//     props<{ heading: string, subheading: string, message: string, timeout: number, position: string}>()
// );

export const displaySuccess = createAction(
    "[Toastr Notification] Display Success",
    props<{ heading: string, subheading: string, message: string, timeout: number, position: string}>()
);

// export const displayWarning = createAction(
//     "[Toastr Notification] Display Warning",
//     props<{ heading: string, subheading: string, message: string, timeout: number, position: string}>()
// );

// export const displayError = createAction(
//     "[Toastr Notification] Display Error",
//     props<{ heading: string, subheading: string, message: string, timeout: number, position: string}>()
// );