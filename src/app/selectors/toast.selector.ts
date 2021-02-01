import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../models/app-state.model";
import { Toast } from "../models/toast.model";

// export const selectToastr = createSelector(
//   (state: AppState) => state.toastrs,
//   (toastrs: Array<Toast>) => toastrs
// );