// @flow
import { combineReducers } from 'redux';
import currencies from './Currencies/reducer';
import type {CurrencyReducerState} from "./Currencies/types";
import settings from "./Settings/reducer";
import type {SettingsReducerState} from "./Settings/types";

export default combineReducers({
  currencies,
  settings
});

export type StoreState = {
  currencies: CurrencyReducerState,
  settings: SettingsReducerState
}
