// @flow
import React from 'react';
import type {ComponentType} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import { setFiatCurrencyActionCreator } from './actions';
import {currentFiatCurrencySelector} from "./selectors";
import type {FiatCurrency} from "../Currencies/types";

export type SettingsHOCPassedProps = {
  currentFiatCurrency: FiatCurrency;
  setFiatCurrency(fiatCurrency: FiatCurrency): void;
}

type Props = {
  dispatch(action: any):void;
}

export default function SettingsHOC(ComponentForWrapping: ComponentType<SettingsHOCPassedProps>): ComponentType<any> {

  class ComponentWithSettingsHOC extends React.Component<SettingsHOCPassedProps & Props> {

    setFiatCurrency = (fiatCurrency: FiatCurrency) => {
      this.props.dispatch(setFiatCurrencyActionCreator(fiatCurrency));
    };

    render() {
      return (
        <ComponentForWrapping
          setFiatCurrency={this.setFiatCurrency}
          {...this.props}
        />
      )
    }
  }

  return compose(
    connect(
      state => ({
        currentFiatCurrency: currentFiatCurrencySelector(state),
      }),
      dispatch => ({dispatch}),
    )
  )(ComponentWithSettingsHOC);

}
