import React from 'react';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    if(!username || !password) {
      return this.setState({
        message: 'username and password must be supplied'
      });
    }

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then((res) => res.json())
    .then((res) => {
      // post success message

      this.setState({
        message: 'You\'ve signed up'
      });
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.message}
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
          required
        />
        <input type="submit" value="Sign up" />
      </form>
    );
  }
}

export default SignupForm;
