import React, { Fragment, Component } from 'react'
import Header from './partials/Header'
import AsideLeft from './partials/AsideLeft'
import AsideRight from './partials/AsideRight'
import MainContent from './partials/MainContent'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <main className="content__container">
          <AsideLeft />
          <MainContent />
          <AsideRight />
        </main>
      </Fragment>
    )
  }
}

export default Home;
