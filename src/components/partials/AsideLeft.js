import React, { Component } from 'react'
import ImgProfile from '../../images/profile-mini.jpeg'

class AsideLeft extends Component {
  render () {
    return (
      <aside className="aside__left">
        <div className="info__basic">
          <div className="info__profile">
            <div className="info-bg"></div>
            <div className="info-picture">
              <img src={ImgProfile} alt="Profile Name" className="rounded-circle" />
            </div>
            <div className="info-desc">
              <a><span>Christian Hanggra</span></a>
              <p>Tech Enthusiast</p>
            </div>

          </div>
          <div className="info__dashboard">
            <div className="info__viewer">
              <a><span>80</span></a>
              <p>Who's viewed your profile</p>
            </div>
            <div className="info__connections">
              <a><span>110</span></a>
              <p>Connections</p>
              <p><b>Manage your network</b></p>
            </div>
          </div>
          <div className="info__plan">
            <p>Access exclusive tools &amp; insights</p>
            <a><b>Free upgrade to premium</b></a>
          </div>
        </div>
      </aside>
    )
  }
}

export default AsideLeft;
