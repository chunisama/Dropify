import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      day: "",
      month: "",
      year: "",
      gender: ""
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
    let user;
    if (this.props.formType === "Log In"){
      user = Object.assign({}, this.state);
      this.props.processForm(user);
    } else {
      let birthday; 
      if (this.state.month == '' || this.state.year == '') {
        birthday = 'Invalid Date'
      } else {
        birthday = new Date(this.state.month + ` ${this.state.day}` + ` ${this.state.year}`);
      }
      birthday = birthday == 'Invalid Date' ? "" : birthday;
      user = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        name: this.state.name,
        birthday: birthday,
        gender: this.state.gender
      }
      this.props.processForm(user);
    }
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

  //Returns a collection of Errors
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>;
        })}
      </ul>
    );
  }

  //Error helper methods
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

  emailInputField(){
    const emailError = "Email can't be blank";
    if (this.props.formType === "Sign up") {
      return(
        <div className="email">
        <input
          className={"email-input" + this.changeToErrorForm(emailError)}
          type="email"
          value={this.state.email}
          onChange={this.update("email")}
          placeholder="Email"
        />
        </div>
      )
    }
  }

  nameInputField(){
    const nameError = "Name can't be blank";
    if (this.props.formType === "Sign up") {
      return (
        <div className="name">
          <input
            className={"name-input" + this.changeToErrorForm(nameError)}
            type="name"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="What should we call you?"
          />
        </div>
      )
    }
  }
  birthdayInputField(){
    if (this.props.formType === "Sign up") {
      return (
        <div>
        <label className="dob-label" htmlFor="dob">Date of birth</label>
        <div className="birthday-container">
            <select className={"month-menu" + this.changeToErrorForm("Birthday can't be blank")} onChange={this.update("month")} id="dob">
            <option>Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
            <input
              className={"day-input" + this.changeToErrorForm("Birthday can't be blank")}
            name="day"
            type="number"
              value={this.state.day}
              onChange={this.update("day")}
              placeholder="Day"
              max="31"
              maxLength="2"
              min="1"
            />
            <input
              className={"year-input" + this.changeToErrorForm("Birthday can't be blank")}
              type="number"
              value={this.state.year}
              onChange={this.update("year")}
              placeholder="Year"
              min="1900"
              max="2006"
              maxLength="4"
            />
          </div>
        </div>
      )
    }
  }

  genderButtons(){
    if (this.props.formType === "Sign up") {
      return (
        <div className="gender-container">
          <input type="radio" className="male" value="Male" id="m" name="gender" onChange={this.update("gender")}/>
          <label htmlFor="m">Male</label>
          <input type="radio" className="female" value="Female" id="f" name="gender" onChange={this.update("gender")}/>
          <label htmlFor="f">Female</label>
          <input type="radio" className="neutral" value="Non-binary" id="non" name="gender" onChange={this.update("gender")}/>
          <label htmlFor="non">Non-binary</label>
        </div>
      )
    }
  }

  render() {
    //Error Constants
    const invalidCredentials = "Invalid Username or Password";
    const userNameError = "Username can't be blank";
    const passwordError = "Password is too short (minimum is 6 characters)";
    const emailError = "Email can't be blank";
    const genderError = "Gender can't be blank";
    const nameError = "Name can't be blank";
    return (
      <div>
        {/* Session Logo */}
        <div className="session-logo">
          <img className="session-img" src="../../assets/Spotify_Icon_RGB_Black.png" />
          &nbsp;
            <h1 className="session-title">Dropify</h1>
        </div>
          {/* demo button */}
      <button className="demo" onClick={() => this.demoUser(this.props.formType)}>Demo User</button>
      <form className="form-container" onSubmit={this.handleSubmit}>
        <div className="session-container">
          {/* email*/}
          {this.emailInputField()}
          <div className="errors">
            <div>{this.doesErrorExist(emailError)}</div>
          </div>
          {/* username */}
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
          {/* password */}
          <div className="password">
            <input
              className={"password-input"+(this.changeToErrorForm(passwordError) || this.changeToErrorForm(invalidCredentials))}
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          </div>
          <div className="errors">
              {this.doesErrorExist(passwordError)}
              {this.doesErrorExist(invalidCredentials)}
          </div>
          {/* name */}
          {this.nameInputField()}
            <div className="errors">
              <div>{this.doesErrorExist(nameError)}</div>
            </div>
          {/* birthday */}
          {this.birthdayInputField()}
          < div className="errors">
            <div>{this.doesErrorExist("Birthday can't be blank")}</div>
          </div>
          {/* gender */}
          {this.genderButtons()}
            <div className="errors">
              <div>{this.doesErrorExist(genderError)}</div>
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
