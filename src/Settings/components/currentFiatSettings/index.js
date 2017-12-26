// @flow
import React from 'react';
import cn from 'classnames';
import type {SettingsHOCPassedProps} from "../../HOC";
import './index.css';

type Props = SettingsHOCPassedProps;

const FiatCurrencies = ['USD', 'EUR', 'CNY'];

function FiatSettings(props: Props){
  return (
    <div className='FiatSettings'>
      {FiatCurrencies.map(item => (
        <div
          key={item}
          className={cn('FiatSettings__fiat', {
            "FiatSettings__fiat--isCurrent": props.currentFiatCurrency === item,
          })}
          onClick={() => props.setFiatCurrency(item)}>{item}</div>
      ))}
    </div>
  )
}

export default FiatSettings