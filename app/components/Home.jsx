var React = require('react');
var {Link, Router} = require('react-router');
var transitionTo = Router.transitionTo;
var Auth = require('j-toker');
Auth.configure({
  apiUrl: 'https://prompted-db.herokuapp.com'
});

var Home = React.createClass({
  getInitialState: function(){
    return {
      login: false,
      signUp: false
    }
  },
  handleSignUp: function(){
    this.setState({
      signUp: true,
      login: false
    });
    console.log('hello');
  },
  handleLogin: function(){
    this.setState({
      signUp: false,
      login: true
    })
  },
  submitLogin: function(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    console.log(username + ' ' + password);
    Auth.emailSignIn({
      email: 'newcomer.aaron@icloud.com',
      password: 'test'
    });
  },
  submitSignUp: function(e){
    e.preventDefault();
    var signUpUser = {
      // email: this.refs.email.value,
      // password: this.refs.password.value,
      // password_confirmation: this.refs.passwordConfirm.value,
      // firstName: this.refs.firstName.value,
      // lastName: this.refs.lastName.value,
      // username: this.refs.username.value
      email: 'newcomer.aaron@icloud.com',
      password: 'test',
      password_confirmation: 'test',
      confirm_success_url: '/landing'
    }
    var signUpUserJson = JSON.stringify(signUpUser);
    Auth.emailSignUp({
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirm.value,
      confirm_success_url: '/landing',
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      screen_name: this.refs.username.value
    });
    console.log("user " + signUpUserJson)
  },
  render: function(){
    var {login, signUp} = this.state;
    var renderFormArea = () => {
      if (login == true) {
        return (
          <form ref="form" type="submit" className="login-form" onSubmit={this.submitLogin}>
            <input type="text" ref="username" placeholder="username"></input>
            <input type="password" ref="password" placeholder="password"></input>
            <button className="button-login" type="submit">Login</button>
          </form>
        )
      } else if (signUp == true) {
        return (
          <form className="sign-up-form" onSubmit={this.submitSignUp}>
            <input type="text" className="sign-up-name" ref="firstName" placeholder="First Name"></input>
            <input type="text" className="sign-up-name" ref="lastName" placeholder="Last Name"></input>
            <input type="text" ref="email" placeholder="email"></input>
            <input type="text" ref="username" placeholder="username"></input>
            <input type="password" ref="password" placeholder="password"></input>
            <input type="password" ref="passwordConfirm" placeholder="Confirm your password"></input>
            <button className="button-sign-up" type="submit">Sign Up</button>
          </form>
        )
      }
      else {
        return (
          <div>
            <button onClick={this.handleSignUp} className="button-sign-up">Sign Up</button>
            <button onClick={this.handleLogin} className="button-login">Login</button>
          </div>
        )
      }
    }
    return(
      <div>
        <div className="home-content">
          <div className="float-card">
            <h1 className="logo">Prompted.</h1>
            <p>Spark and share your creative side</p>
            <h3>
              <Link to="/landing">Landing Page</Link>
            </h3>

            {renderFormArea()}
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-offset-3 columns">
            <h2>What is Prompted?</h2>
          </div>
        </div>
        <div className="row">
          <div className="large-5 columns">
            <h3>Looking for inspiration?</h3>
            <p>Prompted is this this this this this iwadoijaoa wdioawdja widaoiwjdwajdoa wdj aijw diajwdi jaiwod aiwd iawjd awjdoia wdoi awdji awijdaiow dj awjdaw dajwd ioawj diaw d ajwad</p>
          </div>
          <div className="large-7 columns">
            <img src="http://placecage.com/500/500"/>
            <p>Screen Shot goes here</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
