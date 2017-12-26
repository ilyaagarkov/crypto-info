export const GET_CURRENCY_LIST = 'GET_CURRENCY_LIST';

export const getCurrencyListActionCreator = (list, meta = {}) => ({
  type: GET_CURRENCY_LIST,
  meta,
  payload: list
});

export const GET_CURRENCY_INFO = 'GET_CURRENCY_INFO';
export const getCurrencyInfo = (info, meta = {}) => ({
  type: GET_CURRENCY_INFO,
  meta,
  payload: info
});

export const CLEAR_CURRENT_CURRENCY = 'CLEAR_CURRENT_CURRENCY';
export const clearCurrentCurrency = () => ({
  type: CLEAR_CURRENT_CURRENCY,
});

