import { Toast } from "./toast.model";

export interface AppState {
  toastrs: ReadonlyArray<Toast>;
}