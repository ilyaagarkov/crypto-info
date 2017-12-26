// @flow

import type {SettingAction} from "../types";
import {SET_FIAT_CURRENCY_SETTING} from "../actions";
import type {FiatCurrency} from "../../Currencies/types";

const defaultState = 'USD';

export default function reducer(state: FiatCurrency = defaultState, action: SettingAction) {
  switch (action.type) {
    case SET_FIAT_CURRENCY_SETTING: {
      return action.payload
    }
    default:
      return state;
  }
}
