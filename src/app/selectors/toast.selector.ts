import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../models/app-state.model";
import { Toast } from "../models/toast.model";

export const selectToastr = createSelector(
  (state: AppState) => state.toastrs,
  (toastrs: ReadonlyArray<Toast>) => toastrs
);

// export interface FeatureState {
//     toastr: ReadonlyArray<Toast>;
// }

// export interface AppState {
//     toastrs: FeatureState;
// }

// export const selectFeature = (state: AppState) => state.toastrs;

// export const selectFeatureCount = createSelector(
//     selectFeature,
//     (state: FeatureState) => state.toastr
// );