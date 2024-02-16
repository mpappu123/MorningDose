import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return(
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img" src={imageUrl} alt="news are loading" />
          <div className="contents">
            <h5 className="card-title">{title.slice(0,70)}</h5>
            <p className="card-dis">{description.slice(0,120)}</p>
            <a href={newsUrl} className="read-more">read more</a>
          </div>
      </div>
      )
  }
}

export default NewsItem;