import React, { Component, Fragment } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import { onPostViewing } from '../../../Actions/Actions'

import './PostItem.css'

class PostItemSidebar extends Component {

  getImgInContent = (content) => {
    var m = content.indexOf(`<img src=`) + 10;
    var n = content.indexOf(">", m) - 1;
    return content.slice(m, n);
  };

  render() {
    const backgroundImage = this.getImgInContent(this.props.post.content);
    return (

      <Fragment>
        <div className="block-21 mb-4 d-flex">
          <a className="blog-img mr-4" style={{ backgroundImage: `url(${backgroundImage})` }} />
          <div className="text">
            <h3 className="heading-1"><a onClick={this.props.readmore}>{this.props.post.title}</a></h3>
            <div className="meta">
              <div><i className="far fa-calendar-alt"></i>{" " + this.props.post.time_created}</div>
              <div><i className="fas fa-user"></i>{" " + this.props.post.author}</div>
              {/* <div><a ><span className="icon-person" /> Admin</a></div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(PostItemSidebar);