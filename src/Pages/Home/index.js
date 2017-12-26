// @flow
import React from 'react';
import { compose } from 'redux';
import CurrencyHOC from '../../Currencies/HOC';
import SettingsHOC from '../../Settings/HOC';
import CurrencyListComponent from '../../Currencies/components/list';

const
  CurrencyList = compose(
    CurrencyHOC,
    SettingsHOC,
  )(CurrencyListComponent);

class HomePage extends React.Component<{}>{

  render(){
    
    return (
      <div>
        <div style={{width: "50%"}}>
          <CurrencyList />
        </div>
      </div>   
    )
    
  }

}

export default HomePage;