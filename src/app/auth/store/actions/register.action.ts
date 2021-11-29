import {createAction, props} from "@ngrx/store";

import {ActionTypes} from "../actionTypes";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{usename: string; password: string; email: string}>()
)
