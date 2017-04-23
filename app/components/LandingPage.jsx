var React = require('react');
var {Link, Router} = require('react-router');
var Transition = Router.Transition
var Auth = require('j-toker');

var LandingPage = React.createClass({
  getInitialState: function(){
    return {
      userProfile: false,
      feed: true,
      userSubmissions: false,
      popularSubmissions: false,
      notifications: false
    }
  },
  componentWillMount: function(){
    Auth.validateToken()
      .then(function(user) {
        this.setState({
          username: user.username
        })
        console.log(user)
      }.bind(this));
  },
  handleUserProfile: function(){
    this.setState({
      userProfile: true,
      feed: false,
      userSubmissions: false,
      popularSubmissions: false,
      notifications: false
    })
  },
  handleUserSubmissions: function(){
    this.setState({
      userProfile: false,
      feed: false,
      userSubmissions: true,
      popularSubmissions: false,
      notifications: false
    })
  },
  handlePopularSubmissions: function(){
    this.setState({
      userProfile: false,
      feed: false,
      userSubmissions: false,
      popularSubmissions: true,
      notifications: false
    })
  },
  handleNotifications: function(){
    this.setState({
      userProfile: false,
      feed: false,
      userSubmissions: false,
      popularSubmissions: false,
      notifications: true
    })
  },
  handleFeed: function(){
    this.setState({
      userProfile: false,
      feed: true,
      userSubmissions: false,
      popularSubmissions: false,
      notifications: false
    })
  },
  handleSignOut: function(){
    Auth.signOut();
  },
  render: function(props){
    var {feed, userProfile, userSubmissions, popularSubmissions, notifications } = this.state;
     var renderContent = () => {
      if (feed == true ){
        return(
          <div className="feed-content">
            <div className="row">
              <div className="medium-6 columns">
                <div className="feed-submission-card">
                  <div className="medium-4 columns">
                    <img src="http://placecage.com/100/100"></img>
                    <p className="username">Nic Cage</p>
                  </div>
                  <div className="medium-8 columns">
                    <p>Title of Submission</p>
                      <div className="type-score">
                        <p>Type:</p>
                        <p>Score:</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="medium-6 columns">
                <div className="feed-submission-card">
                  <div className="medium-4 columns">
                    <img src="http://placecage.com/200/200"></img>
                    <p className="username">Nic Cage</p>
                  </div>
                  <div className="medium-8 columns">
                    <p>Title of Submission</p>
                      <div className="type-score">
                        <p>Type:</p>
                        <p>Score:</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      } else if (userProfile == true ){
        return(
          <div className="user-content">
            <div className="medium-6 columns">
                <div className="user-recent-submission">
                  <h5>Recent Submissions</h5>
                </div>
                <div className="row">
                  <div className="medium-12 columns">
                    <div className="recent-submission-card">
                      <p>
                        Title of Submission
                      </p>
                      <div className="type-score">
                        <p>Type:</p>
                        <p>Score:</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
      } else if (userSubmissions == true ){
        return(
          <h1>Submissions</h1>
        )
      } else if ( popularSubmissions == true){
        return(
          <h1>Popular</h1>
        )
      } else if( notifications == true ){
        return(
          <h1>Notifications</h1>
        )
      }
    }
    return (
      <div className="landing-page-container">
        <div className="landing-nav">
          <ul className="control-panel-container">
            <h3>Nav</h3>
            <li>
              <div onClick={ this.handleUserProfile }className="control-panel-button"><p>User</p></div>
            </li>
            <li>
              <div onClick={ this.handleFeed }className="control-panel-button"><p>Feed</p></div>
            </li>
            <li>
              <div onClick={ this.handleUserSubmissions }className="control-panel-button"><p>Submission</p></div>
            </li>
            <li>
              <div onClick={ this.handlePopularSubmissions }className="control-panel-button"><p>Popular</p></div>
            </li>
            <li>
              <div onClick={ this.handleNotifications } className="control-panel-button"><p>Notifications</p></div>
            </li>
            <h3 onClick={this.handleSignOut}>Sign out</h3>
          </ul>
        </div>
        <div className="row landing-page-info">
          <div className="medium-12 columns">
            <div className="row">
              <div className="medium-4 columns prompt-card-container">
                <h3>Active Prompts!</h3>
                <div className="row">
                  <div className="medium-12 columns">
                    <div className="prompt-card">
                      <h4>Daily</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-12 columns">
                    <div className="prompt-card">
                      <h4>Weekly</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-12 columns">
                    <div className="prompt-card">
                      <h4>Monthly</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="medium-8 columns">
                <div className="landing-page-content">
                  { renderContent() }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LandingPage
