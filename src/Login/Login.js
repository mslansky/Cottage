import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import UserContext from '../UserContext'
import './Login.css'

class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    const { error } = this.state
    return (
      <div className="Log">
      <form
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div>
          Username: 
          <input
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            required
            className="username-log-input"
          />
        </div>
        <div>
          Password:
          <input
            id='login-password-input'
            name='password'
            type='password'
            required
            className="password-log-input"
          />
        </div>
        <button type='submit' className="log-button">
          Login
        </button>
      </form>
      </div>
    )
  }
}

export default Login
