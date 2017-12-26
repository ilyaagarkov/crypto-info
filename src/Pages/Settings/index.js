// @flow
import React from 'react';
import { compose } from 'redux';
import SettingsHOC from '../../Settings/HOC';
import SettingsComponent from '../../Settings/components/currentFiatSettings';

const
  Settings = compose(
    SettingsHOC,
  )(SettingsComponent);

class SettingsPage extends React.Component<{}>{

  render(){

    return (
      <div>
        <Settings />
      </div>
    )

  }

}

export default SettingsPage;