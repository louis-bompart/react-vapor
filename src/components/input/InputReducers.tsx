import { IReduxAction } from '../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../ReactVapor';
import { InputActions } from './InputActions';
import * as _ from 'underscore';

export interface IInputState {
  id: string;
  value: any;
  valid: boolean;
  disabled: boolean;
}

export const inputInitialState: IInputState = {
  id: undefined,
  value: undefined,
  valid: true,
  disabled: false,
};

export const inputsInitialState: IInputState[] = [];

export const inputReducer = (
  state: IInputState = inputInitialState,
  action: IReduxAction<IReduxActionsPayload>,
): IInputState => {
  switch (action.type) {
    case InputActions.add:
      return {
        id: action.payload.id,
        value: action.payload.value,
        valid: action.payload.valid,
        disabled: action.payload.disabled,
      };
    case InputActions.changeValue:
      return state.id === action.payload.id
        ? { ...state, value: action.payload.value, valid: action.payload.valid }
        : state;

    case InputActions.validateValue:
      return state.id === action.payload.id
        ? { ...state, valid: action.payload.valid }
        : state;
    case InputActions.setDisable:
      return state.id === action.payload.id
        ? { ...state, disabled: action.payload.disabled }
        : state;
    default:
      return state;
  }
};

export const inputsReducer = (
  state: IInputState[] = inputsInitialState,
  action: IReduxAction<IReduxActionsPayload>,
): IInputState[] => {
  switch (action.type) {
    case InputActions.add:
      return [
        ...state,
        inputReducer(undefined, action)
      ];
    case InputActions.remove:
      return _.reject(state, (input: IInputState) => input.id === action.payload.id);
    case InputActions.changeValue:
    case InputActions.validateValue:
    case InputActions.setDisable:
      return state.map((input: IInputState) => inputReducer(input, action));
    default:
      return state;
  }
};
