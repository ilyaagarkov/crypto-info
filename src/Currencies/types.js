// @flow
import {GET_CURRENCY_LIST, GET_CURRENCY_INFO, CLEAR_CURRENT_CURRENCY} from './actions';

export type CurrencyFromApi = {
  "24h_volume_usd": string;
  available_supply: string;
  id: string;
  last_updated: string;
  market_cap_usd: string;
  max_supply: string;
  name: string;
  percent_change_1h: string;
  percent_change_7d: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: string;
  symbol: string;
  total_supply: string;
}

export type CurrencyAction = {
  type: GET_CURRENCY_LIST,
  payload: CurrencyFromApi[];
} | {
  type: GET_CURRENCY_INFO,
  payload: CurrencyFromApi;
} | {
  type: CLEAR_CURRENT_CURRENCY,
  payload: null
};

export type CurrencyReducerState = {
  list: CurrencyFromApi[],
  current: CurrencyFromApi | null,
}
export type FiatCurrency = 'USD' | 'EUR' | 'CNY';

export type Currency = CurrencyFromApi & {
  price: number;
  volume24h: number;
  market_cap: number;
}
