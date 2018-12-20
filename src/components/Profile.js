import React, { Fragment, Component } from 'react'
import Header from './partials/Header'

class Profile extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <main className="content__container">
          Profile Content
        </main>
      </Fragment>
    )
  }
}

export default Profile;
