import React, { Component } from 'react';
import '../css/UserShow.css';
import UserInfo from '../components/UserInfo';
// import Footer from '../components/Footer'
// import Header from '../components/Header'
// import Button from '../components/Button';


class UserShow extends Component {

  generateUserInfo = () => {
    return this.props.user.map(user => {
      return (
        <UserInfo
          key={user.id}
          user={user}
        />
      )
    })
  }


  render(){
    // console.log("usershow", this.props.user[0]);
    return (
      <div className="user-show">
        {this.generateUserInfo()}
      </div>
    )
  }

}

export default (UserShow);
