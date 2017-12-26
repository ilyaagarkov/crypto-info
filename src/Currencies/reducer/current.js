// @flow
import type {CurrencyFromApi, CurrencyAction} from "../types";
import {GET_CURRENCY_INFO, CLEAR_CURRENT_CURRENCY} from "../actions";

const defaultState = null;

export default function reducer(state: CurrencyFromApi | null = defaultState , action: CurrencyAction) {
  switch (action.type) {
    case GET_CURRENCY_INFO: {
      return action.payload
    }
    case CLEAR_CURRENT_CURRENCY: {
      return null
    }
    default:
      return state;
  }
}
