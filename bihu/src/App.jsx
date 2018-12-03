import React, { Component } from 'react';
import Signup from './Signup';
import Header from './Header';
import Questions from './Questions';
import Answers from './Answers'

import {
  sendUserPass,
  getQuestions,
  getAnswers,
  getUsers,
  sendQuestionInfo
} from './services';

class App extends Component {

  constructor(){
    super();
    this.state = {
      userID: Number,
      user: '',
      password: '',
      tempUsername: '',
      tempPassword: '',

      loginDirectly : false,

      questionID: -1,

      allQuestions: [],
      users:[],
      answers: [],
      questionTitle:'',
      questionDesc:''

    };
    this.updateTempUsername = this.updateTempUsername.bind(this);
    this.updateTempPassword = this.updateTempPassword.bind(this);
    this.executeSignup = this.executeSignup.bind(this);
    this.changeBtnText = this.changeBtnText.bind(this);
    this.executeLogin = this.executeLogin.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.pollQuestions = this.pollQuestions.bind(this);
    this.pollAnswers = this.pollAnswers.bind(this);
    this.pollUserInfo = this.pollUserInfo.bind(this);
    this.pollAll = this.pollAll.bind(this);
    this.updateQuestionDesc = this.updateQuestionDesc.bind(this);
    this.updateQuestionTitle = this.updateQuestionTitle.bind(this);
    this.sendQuestion = this.sendQuestion.bind(this);
  }

  componentDidMount() {
    this.pollAll();
  }

  changeBtnText() {
    this.setState({
      loginDirectly: true
    })
  }

  executeSignup() {
    this.setState({
      tempUsername: '',
      password: this.state.tempPassword,
      tempPassword: ''
    });
    sendUserPass(this.state.tempUsername, this.state.tempPassword, 'signup')
    .then(this.updateUserInfo);

  }
  executeLogin(){
    this.setState({
      tempUsername: '',
      password: this.state.tempPassword,
      tempPassword: ''
    });
    sendUserPass(this.state.tempUsername, this.state.tempPassword, 'login')
    .then(this.updateUserInfo);

  }

  pollAll(){
    this.pollQuestions();
    this.pollAnswers();
    this.pollUserInfo();

    setTimeout(this.pollAll, 1000);
  }

  pollQuestions(){
    getQuestions()
    .then(allques => {
      this.setState({
        allQuestions: allques
      })
    })
  }

  pollUserInfo(){
    getUsers()
    .then(allUsers => {
      this.setState({
        users: allUsers
      })
    })
  }

  pollAnswers(){
    getAnswers()
    .then(allAnswers => {
      this.setState({
        answers: allAnswers
      })
    })
  }

  handleClick = (newQuestionID) => {
    this.setState({
        questionID : newQuestionID
    })
  }

  updateUserInfo(data){
    this.setState({
      userID: data.userID,
      user: data.username
    });
  }

  updateTempUsername(e) {
    this.setState({
      tempUsername: e.target.value
    });
  }

  updateTempPassword(e) {
    this.setState({
      tempPassword: e.target.value
    });
  }

  updateQuestionTitle(e) {
    this.setState({
       questionTitle: e.target.value
    })
  }

  updateQuestionDesc(e) {
    this.setState({
       questionDesc: e.target.value
    })
  }

  sendQuestion() {
    sendQuestionInfo(this.state.userID, this.state.questionTitle, this.state.questionDesc);
    alert('Question has been added!');
  }

  render() {
    const isLoggedIn = !!this.state.user;
    const hasQuestionID = !(this.state.questionID === -1);

    return (
      <div className="App" >
       {isLoggedIn || <Signup
          username={this.state.tempUsername}
          updateTempUsername={this.updateTempUsername}
          password={this.state.tempPassword}
          updateTempPassword={this.updateTempPassword}
          executeSignup={this.executeSignup}
          executeLogin={this.executeLogin}
          loginDirectly={this.state.loginDirectly}
          changeBtnText={this.changeBtnText}
        />}

        <header className="App-header"></header>
        {isLoggedIn && <Header/>}
        
        {isLoggedIn && !hasQuestionID && 
          <Questions 
          allQuestions={this.state.allQuestions} 
          handleClick = {this.handleClick} 
          users = {this.state.users}
          updateQuestionTitle = {this.updateQuestionTitle}
          updateQuestionDesc = {this.updateQuestionDesc}
          sendQuestion = {this.sendQuestion}
          />
        }
        
        {isLoggedIn && hasQuestionID && 
          <Answers 
          allQuestions={this.state.allQuestions} 
          questionID = {this.state.questionID} 
          answers={this.state.answers}
          userID={this.state.userID}
          handleClick = {this.handleClick} 
          />
        }
      </div>
    );
  }
}

export default App;
