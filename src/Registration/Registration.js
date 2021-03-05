import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'
import './Registration.css'

class Registration extends Component {
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
        this.props.onRegistrationSuccess({ name, username, password })
        name.value = ''
        username.value = ''
        password.value = ''
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
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
        <div>
          Enter your name
          <input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            required
            className="name-input"
          />
        </div>
        <div>
          Choose a username
          <input
            id='registration-username-input'
            name='username'
            required
            className="username-input"
          />
        </div>
        <div>
          Choose a password
          <input
            id='registration-password-input'
            name='password'
            type='password'
            required
            className="password-input"
          />
        </div>
        <footer>
          <button type='submit' className="signup">
            Sign up
          </button>
          {' '}
          <div className="logflex">
            <div className="accountflex">
              <Link to='/login'>Already have an account? </Link>
            </div>
            <div className="demoflex">
              <Link to='/login'> Want a Demonstration?</Link>
            </div>
          </div>
          
        </footer>
      </form>
      </div>
    )
  }
}

export default Registration
