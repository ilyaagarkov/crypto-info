// @flow
import React from 'react';
import type {ComponentType} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

import { getCurrencyListActionCreator, getCurrencyInfo, clearCurrentCurrency } from './actions';
import type {CurrencyFromApi} from "./types";
import {currencyListSelector, currentCurrencySelector} from "./selectors";
import type {FiatCurrency} from "./types";

export type CurrencyHOCPassedProps = {
  getList(fiat?: FiatCurrency): Promise<any>;
  getCurrencyInfo(id: string, fiat?: FiatCurrency): Promise<any>;
  clearCurrentCurrencyInfo(): void;
  list: CurrencyFromApi[];
  current: CurrencyFromApi,
};

type Props = {
  dispatch(action: any):void;
}

export default function CurrencyHOC(ComponentForWrapping: ComponentType<CurrencyHOCPassedProps>): ComponentType<any> {

  class ComponentWithCurrencyHOC extends React.Component<CurrencyHOCPassedProps & Props> {

    getList = async (fiat: FiatCurrency = 'USD') => {
      const response = await axios.get(`https://api.coinmarketcap.com/v1/ticker/?convert=${fiat}&limit=100`);

      this.props.dispatch(getCurrencyListActionCreator(response.data));
    };

    getCurrencyInfo = async (id: string, fiat: FiatCurrency = 'USD') => {
      const response = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${id}/?convert=${fiat}`);
      this.props.dispatch(getCurrencyInfo(response.data[0]));
    };

    clearCurrentCurrencyInfo =() => {
      this.props.dispatch(clearCurrentCurrency())
    }

    render() {
      return (
        <ComponentForWrapping
          getList={this.getList}
          getCurrencyInfo={this.getCurrencyInfo}
          clearCurrentCurrencyInfo={this.clearCurrentCurrencyInfo}
          {...this.props}
        />
      )
    }

  }

  return compose(
    connect(
      state => ({
        list: currencyListSelector(state),
        current: currentCurrencySelector(state)
      }),
      dispatch => ({dispatch}),
    )
  )(ComponentWithCurrencyHOC);

}
