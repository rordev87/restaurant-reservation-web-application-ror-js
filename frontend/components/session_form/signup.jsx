import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      confirm_password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push(`/`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.confirm_password) {
      this.props.receiveErrors(["Passwords do not match."]);
    } else {
      this.props.signup(this.state).then(
        () => {
          this.props.closeModal();
          this.props.clearErrors();
        }
      );
    }
  }
//
//   navLink() {
//     if (this.props.formType === 'login') {
//       return <Link to="/signup">sign up instead</Link>;
//     } else {
//       return <Link to="/login">log in instead</Link>;
//     }
//   }
//
  renderErrors() {
    return(
      <ul className="error-ul">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form login-form-signup">
            <h4>Welcome to StarTable!</h4>
            {this.renderErrors()}
            <label>
              <input
                type="text"
                value={this.state.first_name}
                placeholder="First Name *"
                onChange={this.update('first_name')}
                className="login-input"
              />
            </label>
            <br />

            <label>
              <input
                type="text"
                value={this.state.last_name}
                placeholder="Last Name *"
                onChange={this.update('last_name')}
                className="login-input"
              />
            </label>
            <br />

            <label>
              <input
                type="text"
                value={this.state.email}
                placeholder="Enter email *"
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />

            <label>
              <input
                type="password"
                value={this.state.password}
                placeholder="Enter password *"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />

            <label>
              <input
                type="password"
                value={this.state.confirm_password}
                placeholder="Re-Enter password *"
                onChange={this.update('confirm_password')}
                className="login-input"
              />
            </label>
            <br />

            <button type="submit" className="session-submit">Create Account</button>
          </div>
        </form>
        <div onClick={this.props.closeModal} className="close-x">&times;</div>

      </div>
    );
  }

}
export default withRouter(Signup);
