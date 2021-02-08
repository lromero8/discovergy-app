import { Action, createReducer, on } from '@ngrx/store';
import { displayToast } from '../actions/toast.actions';
import { Toast } from "../models/toast.model"


export const initialState: ReadonlyArray<Toast> = [];

export const toastReducer = createReducer(
    initialState,
    on(displayToast,  (state, { toast }) => [...state, toast])
);