import React, { Component, Fragment } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import { onPostViewing } from './../../../Actions/Actions'

import './PostItem.css'

class PostsItem extends Component {

  getImgInContent = (content) => {
    var m = content.indexOf(`<img src=`) + 10;
    var n = content.indexOf(">", m) - 1;
    return content.slice(m, n);
  };

  delImgInContent = (content) => {
    var m = content.indexOf(`<figure`);
    var n = content.indexOf("</figure>", m) + 9;
    while (m > 0) {
      content = content.replace(content.slice(m, n), "");
      m = content.indexOf(`<figure`);
      n = content.indexOf("</figure>", m) + 9;
    }
    return content;
  };



  getDescription = (content) => {
    content = this.delImgInContent(content);
    while (content.indexOf('h1') > 0) {
      content = content.replace('h1', 'strong')
    }
    while (content.indexOf('h2') > 0) {
      content = content.replace('h2', 'strong')
    }
    while (content.indexOf('h3') > 0) {
      content = content.replace('h3', 'strong')
    }
    while (content.indexOf('h4') > 0) {
      content = content.replace('h4', 'strong')
    }
    while (content.indexOf('h5') > 0) {
      content = content.replace('h5', 'strong')
    }
    while (content.indexOf('h6') > 0) {
      content = content.replace('h6', 'strong')
    }
    return content;

  }


  render() {
    const backgroundImage = this.getImgInContent(this.props.post.content);
    return (

      <Fragment>
        <div className="col-md-8 d-flex ">
          <div className="blog-entry align-self-stretch d-md-flex">
            <a className="block-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
            </a>
            <div className="text d-block pl-md-4">
              <div className="meta mb-3">
                <div><i class="far fa-calendar-alt"></i>{" " + this.props.post.time_created}</div>
                <div><i class="fas fa-user"></i>{" " + this.props.post.author}</div>
                {/* <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div> */}
              </div>
              <h3 className="heading"><a onClick={this.props.readmore}>{this.props.post.title}</a></h3>
              <div className="descriptionText">
                {ReactHtmlParser(this.getDescription(this.props.post.content))}
              </div>
              <p><button className="btn btn-primary py-2 px-3" onClick={this.props.readmore}>Đọc thêm</button></p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {

  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    readmore: () => {
      dispatch(onPostViewing(props.post));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsItem);