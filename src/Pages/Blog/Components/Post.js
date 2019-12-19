import React, { Component, Fragment } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import { offPostViewing } from './../../../Actions/Actions'
import PostItemSidebar from './PostItemSidebar'

class Post extends Component {

  editImageInContent = (content) => {
    var m = content.indexOf(`<img `);
    while (m > 0) {
      content = content.slice(0, m + 5) + 'class = "img-fluid" ' + content.slice(m + 5);
      m = content.indexOf(`<img `, m + 4);
    }
    return content;

  }

  componentDidMount() {
    window.scrollTo(400, 400)
  }

  render() {

    var showPostsListSidebar = this.props.posts.map((ele, index) => {
      return (
        <PostItemSidebar
          post={ele}
          key={index}
          index={index + 1}
        />
      )
    })

    return (
      <Fragment>
        <section className="ftco-section ftco-degree-bg">
          <div className="container">
            <div className="row">
              <div class="col-lg-8">
                <p style={{ padding: 0 }} >
                  <span style={{ fontWeight: 800, fontSize: '50px', color: 'black' }} className="mb-3">{this.props.post.title}</span >
                </p>
                <p>
                  <div><i class="far fa-calendar-alt"></i>{" " + this.props.post.time_created}</div>
                  <div><i class="fas fa-user"></i>{" " + this.props.post.author}</div>
                </p>
                <p>
                  {ReactHtmlParser(this.editImageInContent(this.props.post.content))}
                </p>
              </div>
              <div class="col-lg-4 sidebar">
                <div class="sidebar-box">
                  <h3 class="heading">Bài viết gần đây</h3>
                  {showPostsListSidebar}
                </div>
              </div>
            </div>
          </div>
        </section>
        <button style={{ position: "fixed", top: "90vh", left: "90vw" }} className="btn btn-primary py-2 px-3 " onClick={this.props.comeBack}>Quay lại</button>
      </Fragment >
    )
  }
}
const mapStateToProps = (state) => {

  return {
    post: state.isPostViewing,
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    comeBack: () => {
      dispatch(offPostViewing());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);