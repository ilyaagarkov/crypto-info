// @flow
import React from 'react'
import { compose } from 'redux';
import CurrencyHOC from '../../Currencies/HOC';
import SettingsHOC from '../../Settings/HOC';
import CurrencyComponent from '../../Currencies/components/info';

const
  CurrencyInfo = compose(
    CurrencyHOC,
    SettingsHOC,
  )(CurrencyComponent);

type Props = {
  params: any;
};

type State = {};

class CurrencyPage  extends React.Component<Props, State>{

  render(){
   
    
    return (
      <div>
        <CurrencyInfo currencyId={this.props.params.currencyId}  />
      </div>   
    )
    
  }

}

export default CurrencyPage;