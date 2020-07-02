import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const axios = require('axios');

class Signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        username: '',
        mobile: ''
      };
      this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = key => e => {
      this.setState({ [key]: e.target.value });
    };
  
    render() {
      return (
        <div>
          <center>
            <h1>Sign Up</h1>
            
            <div>
                <input
                  style={{
                    width: '195px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('username')}
                  placeholder="이름"
                ></input>
                </div>
            <div>
                <input
                  style={{
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  type="email"
                  placeholder="EMAIL"
                  onChange={this.handleInputValue('email')}
                ></input>
              </div>
              <div>
                <input
                  style={{
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('password')}
                  type="password"
                  placeholder="PASSWORD"
                ></input>
              </div>
              
              <div>
                <input
                  style={{
                    width: '195px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  type="mobile"
                  onChange={this.handleInputValue('mobile')}
                  placeholder="MOBILE"
                ></input>
              </div>
              <div>
              <Link to="/home">홈 화면으로</Link>
            </div>
              <button
                style={{
                  width: '200px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                  backgroundColor: 'white'
                }}
                type="submit"
              >
                회원가입
              </button>
           
          </center>
        </div>
      );
    }
  }
  export default Signup;