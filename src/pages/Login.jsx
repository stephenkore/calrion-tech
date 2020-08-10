import React from "react";
import { LoginContext } from "../shared/loginContext";

export default class Login extends React.Component {
  static contextType = LoginContext;

  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    credMatch: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    const credentials = {
      username: "Clarion@clarion.com",
      password: "Clarion123",
    };
    let emailError = "";
    let passwordError = "";
    // let passwordError = "";
    this.setState({ emailError, passwordError });

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    let pat = /[0-9]/g;

    var passw = /^(?=.*[A-Z])/;
    if (!this.state.password.match(passw)) {
      passwordError = "invalid password";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    if (
      this.state.email === credentials.username &&
      this.state.password === credentials.password
    ) {
      console.log([
        credentials.username === this.state.email,
        credentials.password === this.state.password,
      ]);
      return true;
    } else {
      this.setState({ credMatch: "Invalid Email and Password!" });
      return false;
    }
  };

  handleSubmit = (event) => {
    const [cinfo, setCinfo] = this.context;

    event.preventDefault();
    event.stopPropagation();
    const isValid = this.validate();
    if (isValid) {
      setCinfo(this.state);
      this.props.history.push("/thank-you");
      // clear form
      //this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header text-center">
                  <b>Login</b>
                </div>
                <div className="card-body">
                  {this.state.credMatch && (
                    <div className="alert alert-danger" role="alert">
                      {this.state.credMatch}
                    </div>
                  )}

                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <div className="formError">{this.state.emailError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <div className="formError">
                        {this.state.passwordError}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      formNoValidate
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
