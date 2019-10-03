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
    this.demoUser = this.demoUser.bind(this);
    this.handleLinks = this.handleLinks.bind(this);

  }
  
  componentDidMount(){
    this.props.clearErrors();
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
    if (formType === "Log In") {
      return (
        <div className="signup-container">
          <h1 className="session-q1">Don't have an account?</h1>
          <Link to="/signup"><button className="sign-up">Sign Up For Dropify</button></Link>
        </div>
      )
    } else {
      return (
      <div className="login-container">
          <h1 className="session-q2">Already have an account? </h1>
          <Link to="/login"><button className="sign-in">Log In</button></Link>
      </div>
      )
    }
  }

  demoUser(formType){
    const user = {username: "Guest", password: "password"};
    formType === "Log In" ?
    this.props.processForm(user) : this.props.demoUser(user);
  }

  // Returns a collection of Errors
  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, idx) => {
  //         return <li key={idx}>{error}</li>;
  //       })}
  //     </ul>
  //   );
  // }

  doesErrorExist(error) {
    const errors = this.props.errors;
    if (errors.includes(error)) {
      return error;
    }
  }

  changeToErrorForm(error){
    if (this.doesErrorExist(error)){
      return "-error";
    } else {
      return "";
    }
  }

  render() {
    //Error Constants
    const invalidCredentials = "Invalid Username or Password";
    const userNameError = "Username can't be blank";
    const PasswordError = "Password is too short (minimum is 6 characters)";
    return (
      <div>
        <div className="session-logo">
          <img className="session-img" src="../../assets/Spotify_Icon_RGB_Black.png" />
          &nbsp;
            <h1 className="session-title">Dropify</h1>
        </div>
      <form className="form-container" onSubmit={this.handleSubmit}>
        <div className="session-container">
          <button className="demo" onClick={() => this.demoUser(this.props.formType)}>Demo User</button>
          <div className="username">
            <input
                className={"username-input" + (this.changeToErrorForm(userNameError) || this.changeToErrorForm(invalidCredentials))}
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
          </div>
            <div className="errors">
              <div>{this.doesErrorExist(userNameError)}</div>
            </div>
          <div className="password">
            <input
              className={"password-input"+(this.changeToErrorForm(PasswordError) || this.changeToErrorForm(invalidCredentials))}
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          </div>
          <div className="errors">
              <div>{this.doesErrorExist(PasswordError)}</div>
              <div>{this.doesErrorExist(invalidCredentials)}</div>
          </div>
          <div className="button-containers">
            <button className="session-button">{this.props.formType}</button>
            <div className="session-margin"></div>
            {this.handleLinks(this.props.formType)}
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default SessionForm;
