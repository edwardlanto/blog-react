import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();

  }
  //Runs fetchPosts when component is rendered on screen

  renderPosts() {
    // Receiving object and NOT array from Posts Reducer, so to map you need lodash function _map to map over it
    return _.map(this.props.posts, post => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <li className="list-group-item" key={post.id}>
            Title: {post.title}
            <br />
          </li>
        </Link>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3 className="heading">Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
        <p id="empty" />
      </div>
    );
  }
}

//Use mapStateToProps if you ever want to get state from reducer and pass it to this component
function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
// Passing in fetchPosts function give you access to it within component without needing to write seperate function eg. MapDispatchToProps
