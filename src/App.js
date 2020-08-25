import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      description: '',
      gender: 0,
      language: 'en',
      interest1: false,
      interest2: true
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    let nameInput = event.target.name;
    let valueInput = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [nameInput]: valueInput
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="mgt-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            <div className="card">
              <div className="card-header bg-success text-white">LOGIN</div>
              <div className="card-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="username" id="userName" className="form-control" onChange={this.onHandleChange} value={this.state.username} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={this.onHandleChange} value={this.state.password} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" className="form-control" onChange={this.onHandleChange} value={this.state.description}></textarea>
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select className="form-control" onChange={this.onHandleChange} name="gender" value={this.state.gender}>
                      <option value={1}>Male</option>
                      <option value={0}>Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="language" value="en" onChange={this.onHandleChange} checked={this.state.language === 'en'} />English
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="language" value="vi" onChange={this.onHandleChange} checked={this.state.language === 'vi'} />Vietnamese
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value={true} name="interest1" onChange={this.onHandleChange} checked={this.state.interest1 === true} />Interests 1
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value={true} name="interest2" onChange={this.onHandleChange} checked={this.state.interest2 === true} />Interests 2
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-success mgr-25">Login</button>
                    <button type="reset" className="btn btn-secondary">Clear</button>
                  </div>
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

export default App;