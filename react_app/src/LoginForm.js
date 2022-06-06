import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      buttonDisabled: false
    }
  }

  setInputValue(property, val) {
    val = val.trim();

    if (val.length > 12) {
      return;
    }

    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      userName: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogin() {
    if (!this.state.userName) {
      return;
    }
    if (!this.state.password) {

    }

    this.setState({
      buttonDisabled: true
    })

    try {
      let res = await fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: this.state.userName,
          password: this.state.password
        })
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.userName = result.userName;
      }
      else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    }
    catch (e) {
      console.log(e);

      this.resetForm();
    }
  }


  render() {
    return (
      <div className="loginForm">
        Login in
        <InputField
          type='text'
          placeholder='Username'
          value={this.state.userName ? this.state.userName : ''}
          onChange={ (val) => this.setInputValue('userName', val) }
        />
        <InputField
          type='password'
          placeholder='Password'
          value={this.state.password ? this.state.password : ''}
          onChange={ (val) => this.setInputValue('password', val) }
        />
        <SubmitButton
          text='Login'
          disabled={this.state.buttonDisabled}
          onClick={ () => this.doLogin() }
        />
      </div>
    );
  }
}

export default LoginForm;
