import type {FiatCurrency} from "../Currencies/types";

export const SET_FIAT_CURRENCY_SETTING = 'SET_FIAT_CURRENCY_SETTING';

export const setFiatCurrencyActionCreator  = (fiat: FiatCurrency) => ({
  type: SET_FIAT_CURRENCY_SETTING,
  payload: fiat
});
