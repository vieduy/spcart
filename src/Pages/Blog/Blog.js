import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import './Blog.css';
import BackgroundImageHeader from './image/BlogBackgroundHeader.jpg'
import PostsList from './Components/PostsList'
import Post from './Components/Post'
import { fetchPostsDataRequest } from './../../Actions/Actions'



class Blog extends Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <Fragment>
        <div className="hero-wrap hero-bread" style={{ backgroundImage: `url(${BackgroundImageHeader})` }}>
          <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
              <div class="col-md-9 text-center">
                <p class="breadcrumbs"><span class="mr-2">xuân tình nguyện 2020</span></p>
                <span class="mb-0 baiviet">BÀI VIẾT</span>
              </div>
            </div>
          </div>
        </div>

        {this.props.isPostViewing === null ? <PostsList /> : <Post />}
      </Fragment >
    )
  }
}

const mapStateToProps = (state) => {

  return {
    isPostViewing: state.isPostViewing
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchPostsDataRequest());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Blog);
