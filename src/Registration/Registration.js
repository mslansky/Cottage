import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'
import './Registration.css'
import Footer from '.././Footer/Footer.js';
import UserContext from '../UserContext';

class Registration extends Component {
  static contextType = UserContext

  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
    .then(user => {
      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      }).then(res => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.handleLoginSuccess()
      })
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/Home'
    history.push(destination)
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <div className="register">
      <form onSubmit={this.handleSubmit} className="register-form">
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <p className="qdemo">Want a demo? Visit the login page for information. </p>
        <div>
          Enter your name :
          <input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            required
            className="name-input"
          />
        </div>
        <div>
          Choose a username : 
          <input
            id='registration-username-input'
            name='username'
            required
            className="username-input"
          />
        </div>
        <div>
          Choose a password : 
          <input
            id='registration-password-input'
            name='password'
            type='password'
            required
            className="password-input"
          />
        </div>
        
          <button type='submit' className="signup">
            Sign up
          </button>
         
      </form>
      <Footer/>
      </div>
    )
  }
}

export default Registration
