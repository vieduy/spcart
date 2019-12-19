import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPostsDataRequest } from './../../../Actions/Actions'
import PostItem from './PostItem'
import PostItemSidebar from './PostItemSidebar'

class PostsList extends Component {

  componentDidMount() {
    window.scrollTo(150, 150)
  }

  render() {

    var showPostsList = this.props.posts.map((ele, index) => {
      return (
        <PostItem
          post={ele}
          key={index}
          index={index + 1}
        />
      )
    })
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
              <div className="col-lg-8 ">
                <div className="row">
                  {showPostsList}
                </div>
              </div> {/* .col-md-8 */}
              <div className="col-lg-4 sidebar ">
                <div class="sidebar-box">
                  <h3 class="heading">Bài viết gần đây</h3>
                  {showPostsListSidebar}
                </div>
              </div>
            </div>
          </div>


        </section>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    posts: state.posts
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchPostsDataRequest());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);