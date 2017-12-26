// @flow
import React from 'react'

import type {CurrencyHOCPassedProps} from "../../HOC";
import './index.css';
import type {SettingsHOCPassedProps} from "../../../Settings/HOC";
import Item from './item';
import createCurrency from "../../services/createCurrency";

type Props = CurrencyHOCPassedProps & SettingsHOCPassedProps;

class CurrencyList extends React.Component<Props>{

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    this.props.getList(this.props.currentFiatCurrency);
  };

  render(){
    const {currentFiatCurrency, list} = this.props;
    return (
      <div className="CurrencyList">
        <button onClick={this.getList}>refresh</button>
        <div className="CurrencyList__header">
          <div>Rank</div>
          <div>Symbol</div>
          <div>Price({currentFiatCurrency})</div>
          <div>Change in 24h(%)</div>
        </div>
        {list.map((item) => (
          <Item key={item.id} currency={createCurrency(item, currentFiatCurrency)}  />
        ))}
      </div>   
    )
    
  }

}

export default CurrencyList
