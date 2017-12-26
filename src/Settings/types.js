import {SET_FIAT_CURRENCY_SETTING} from "./actions";
import type {FiatCurrency} from "../Currencies/types";

export type SettingAction = {
  type: SET_FIAT_CURRENCY_SETTING;
  payload: FiatCurrency;
};

export type SettingsReducerState = {
  fiatCurrency: FiatCurrency
}
