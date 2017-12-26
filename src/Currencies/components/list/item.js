import React from 'react';
import cn from 'classnames';
import Link from '../../../components/Link/Link';
import './item.css';
import type {Currency} from "../../types";

type Props = {
  currency: Currency
}

export default ({currency}: Props) => (
  <Link to={`/currency/${currency.id}`} className="CurrencyInList">
    <div>{currency.rank}</div>
    <div>{currency.symbol}</div>
    <div>{currency.price}</div>
    <div className={
      cn('CurrencyInList__percentChange', {
        "CurrencyInList__percentChange--increase": currency.percent_change_24h > 0,
        "CurrencyInList__percentChange--decrease": currency.percent_change_24h < 0,
      })
    }>{currency.percent_change_24h}</div>
  </Link>
)