// @flow
import React from 'react'
import cn from 'classnames';
import type {CurrencyHOCPassedProps} from "../../HOC";
import type {SettingsHOCPassedProps} from "../../../Settings/HOC";
import createCurrency from "../../services/createCurrency";
import './index.css';
import type {Currency} from "../../types";

type Props = CurrencyHOCPassedProps & SettingsHOCPassedProps & {
  currencyId: string
};

class CurrencyInfo extends React.Component<Props>{

  componentDidMount() {
    this.getCurrencyInfo();
  }

  componentWillUnmount() {
    this.props.clearCurrentCurrencyInfo();
  }

  getCurrencyInfo = () => {
    this.props.getCurrencyInfo(this.props.currencyId, this.props.currentFiatCurrency)
  };

  renderChange(value: string){
    return (
      <span className={cn('CurrencyInfo__change', {
        "CurrencyInfo__change--increase": parseFloat(value) > 0,
        "CurrencyInfo__change--decrease": parseFloat(value) < 0,
      })}>{value}</span>
    )
  }

  render(){

    const { current, currentFiatCurrency} = this.props;

    if(!current) return null;

    const currency: Currency = createCurrency(current, currentFiatCurrency);

    return (
      <div className="CurrencyInfo">

        <button onClick={this.getCurrencyInfo}>Refresh</button>

        <div className="CurrencyInfo__field">
          <span>Rank:</span>
          {currency.rank}
        </div>
        <div className="CurrencyInfo__field">
          <span>Name:</span>
          {currency.name}
        </div>
        <div className="CurrencyInfo__field">
          <span>Symbol:</span>
          {currency.symbol}
        </div>
        <div className="CurrencyInfo__field">
          <span>price/​ 24h ​volume/ ​market ​cap({currentFiatCurrency}): </span>
          {currency.price} / {currency.volume24h} / {currency.market_cap}
        </div>
        <div className="CurrencyInfo__field">
          <span>price ​in ​bitcoin:</span>
          {currency.price_btc}
        </div>
        <div className="CurrencyInfo__field">
          <span>1h /​ 24h / 7d ​change(%):</span>
          {this.renderChange(currency.percent_change_1h)} / {this.renderChange(currency.percent_change_7d)} / {this.renderChange(currency.percent_change_24h)}
        </div>
        <div className="CurrencyInfo__field">
          <span>total / ​available​ supply</span>
          {currency.total_supply} / {currency.available_supply}
        </div>
      </div>
    )

  }

}

export default CurrencyInfo;
