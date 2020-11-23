import { combineReducers } from 'redux';
import { sneakersReducer, StateTypeSneakers } from "./sneakers/reducer";
import { interfaceReducer, InterfaceType } from "./interface/reducer";

export interface IState {
  sneakers: StateTypeSneakers
  interface: InterfaceType
}

export const rootReducer = combineReducers({
  sneakers: sneakersReducer,
  interface: interfaceReducer
});