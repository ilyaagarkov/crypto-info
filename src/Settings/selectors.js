// @flow
import { createSelector } from "reselect";
import type {StoreState} from "../rootReducer";

export const settingsSelector = (store: StoreState) => store.settings;

export const currentFiatCurrencySelector = createSelector(
  settingsSelector,
  settings => settings.fiatCurrency
);
