// @flow
import type {CurrencyFromApi, CurrencyAction} from "../types";
import { GET_CURRENCY_LIST } from './../actions';

const defaultState = [];

export default function reducer(state: CurrencyFromApi[] = defaultState, action: CurrencyAction) {
  switch (action.type) {
    case GET_CURRENCY_LIST: {
      return action.payload
    }
    default:
      return state;
  }
}
