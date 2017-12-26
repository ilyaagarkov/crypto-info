// @flow
import type {StoreState} from "../rootReducer";

export const currencyListSelector = (state: StoreState) => state.currencies.list;
//export const currencyListIsLoadingSelector = (state: StoreState) => state.currencies.isListLoading;

export const currentCurrencySelector = (state: StoreState) => state.currencies.current;
//export const currentCurrencyIsLoadingSelector = (state: StoreState) => state.currencies.isCurrentCurrencyLoading;
