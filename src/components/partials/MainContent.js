import React, { Component } from 'react'
import ImgContent from '../../images/content.jpg'

class MainContent extends Component {
  render () {
    return (
      <div className="main__container">
        <div className="news-feed__container">
          <div className="input-feed__container align-items-center">
            <span>Share an article, photo, video or idea</span>
          </div>
          <div className="type-feed__container justify-content-between align-items-center">
            <div className="type-feeds">
              <button className="btn btn-sm button-type">Write an article</button>
              <button className="btn btn-sm button-type">Images</button>
              <button className="btn btn-sm button-type">Video</button>
            </div>
            <div>
              <button className="btn btn-sm btn-primary">Post</button>
            </div>
          </div>
        </div>
        <div className="boxes__container">
          <div className="boxes-profile">Me </div>
          <div className="boxes-content">
            <img src={ImgContent} className="img-fluid" alt="content" />
          </div>
          <div className="boxes-share align-items-center">
            <a className="">Like</a>
            <a className="">Comment</a>
            <a className="">Share</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;
