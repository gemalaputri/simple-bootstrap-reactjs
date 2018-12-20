import React, { Component } from 'react'
import history from '../dependencies/history'
import Select from 'react-select'
import LogoIn from '../../images/in.png'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  handleUserChange = (e) => {
    if(e.value === 'hantze') {

      history.push(`/profile`)
    }
  }

  handleIndex = () => {
    history.push(`/`)
  }

  render () {
    const userOptions = [
			{value: '', label: 'All status'},
  		{value: 'hantze', label: 'Hantze Sudarma'},
  		{value: 'ahmad', label: 'Ahmad Zikri'},
  		{value: 'andoko', label: 'Andoko Chandra'},
  	]

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-in fixed-top">
          <a className="navbar-brand" onClick={this.handleIndex}>
            <img src={LogoIn} width="34" height="34" className="d-inline-block align-top" alt="Logo" />
          </a>
          <form className="form-inline">
            <Select
              name="status"
              className="select2"
              options={userOptions}
              onChange={this.handleUserChange}
              clearable={false} />
          </form>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Network</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Messanging</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Notifications</a>
              </li>
            </ul>

          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
