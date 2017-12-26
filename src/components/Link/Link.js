// @flow
import React from 'react'
import PropTypes from "prop-types";

type Props = {
  to: string;
  children: any;
};

class Link extends React.Component<Props>{

  static contextTypes = {
    history: PropTypes.object
  };

  handleClick = (e : Event) => {
    e.preventDefault();
    this.context.history.push(this.props.to);
  };

  render(){

    const { to, ...rest } = this.props;

    return (
      <a href={to} onClick={this.handleClick} {...rest}>
        {this.props.children}
      </a>
    )

  }

}

export default Link;
