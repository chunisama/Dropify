import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleLinks(formType) {
    if (formType === "login") {
      return (
      <>
        Don't have an account? <Link to="/signup">SIGN UP</Link>
      </>
      )
    } else {
      return (
      <>
        Already have an account? <Link to="/login">SIGN IN</Link>
      </>
      )
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        {/* {this.handleLinks(this.props.formType)} */}
        {this.renderErrors()}
        <br />
        Username
        <input
          type="text"
          value={this.state.username}
          onChange={this.update("username")}
        />
        Password
        <input
          type="password"
          value={this.state.password}
          onChange={this.update("password")}
        />
        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}

export default SessionForm;
