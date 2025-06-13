import React, { Component } from 'react'

export class NewsItems extends Component {
  render(
    {title,desc,imageUrl,newsUrl} = this.props
  ) {
    return (
      <div style={{color:'red'}}>   
       <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{height:"130px"}} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={newsUrl} className="btn btn-primary btn-sm" target="_blank">Read more..</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItems
