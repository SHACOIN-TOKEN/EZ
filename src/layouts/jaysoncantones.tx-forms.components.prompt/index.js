import React from 'react';
import PropTypes from 'prop-types';

/* style */
import './styles.css';
/* password strength check */
import zxcvbn from 'zxcvbn';
/* react bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, Label, Input, Progress } from 'reactstrap';

class Component extends React.Component {

  constructor(props){
    super(props);

    const init = {
      psh_true: {show: true, type: "text"},
      psh_false: {show: false, type: "password"},
    }

    this.state = {
      valid: false,
      loading: false,
      init: init,
      psh: init.psh_false, /* password show hide logic : state */
    };
  }

  handleShowHideButton = () => {
    const { init } = this.state;
    const { psh } = this.state
    if (!psh.show) this.setState({psh: init.psh_true});
    if (psh.show) this.setState({psh: init.psh_false});
  }

  handleShowHideCaption = () => {
    const show = this.state.psh.show;
    if (!show) return this.props.option.showhide_caption.show;
    return this.props.option.showhide_caption.hide;
  }

  render = () => {

    const invalid = this.props.invalid;

    return <InputGroup>
      <Input invalid={invalid} onChange={this.props.onChange} name={this.props.config.name.password} type={this.state.psh.type} className={this.props.option.css_input.password} placeholder={this.props.option.placeholder.password} />
      <InputGroupAddon onClick={this.handleShowHideButton.bind(this)} addonType="append" className="tx-login-password-show-hide-button" >
        {this.handleShowHideCaption()}
      </InputGroupAddon>
    </InputGroup>

  }

}

Component.defaultProps = {
  // config
  config: {
    name: {
      password: "password",
    },
    label: {
      password: "Password",
    },
    types: {
      password: "password",
    }
  },
  // option
  option: {
    showhide_caption: {
      show: '+1',
      hide: '+1'
    },
    placeholder: {
      password: "",
    },
    css_input: {
      password: "tx-login-input-style",
    },
  }
}


export default Component;
