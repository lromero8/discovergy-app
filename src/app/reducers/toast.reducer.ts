import { Action, createReducer, on } from '@ngrx/store';
import { add} from '../actions/toast.actions';
import { Toast } from "../models/toast.model"

// export interface ItemState {
//     list: ToastItem[],
//     type: string,
//     heading: string,
//     subheading: string,
//     message: string,
//     timeout: number,
//     position: string

//   }

// export interface ItemState{ ReadonlyArray<Toast>}

export const initialState: ReadonlyArray<Toast> = [
    // {
    //     header: "Toast",
    //     class: "bg-success text-light",
    //     autohide: true,
    //     delay: 2000,
    //     message: "This is my first toast"
    // }
];

// const initialState: ItemState = {
//     list: [],
//     type: "",
//     heading: "",
//     subheading: "",
//     message: "",
//     timeout: 2000,
//     position: ""
// };

// const _toastReducer = createReducer(initialState,
//     on(add, state => ({...state, list: state.list, type: state.type, heading: state.heading, subheading: state.subheading, message: state.message, timeout: state.timeout, position: state.position})),
//     on(displaySuccess, state => state),
//     on(displayWarning, state => state),
//     on(displayError, state => state)
// );

// export function toastReducer(state: ItemState | undefined, action: Action){
//     return _toastReducer(state, action)
// }

export const toastReducer = createReducer(
    initialState,
    on(add, (state, { toast }) => [...state, toast])
    // on(add, state => ({...state, list: state.list, type: state.type, heading: state.heading, subheading: state.subheading, message: state.message, timeout: state.timeout, position: state.position})),
    // on(add, (state, { ToastItem }) => [...state, ToastItem] )
);