import React, { Component } from 'react';
import { fetchPost, deletePost } from '../actions';
import { connect } from 'react-redux';
import ownProps from 'react-redux';
import { Link } from 'react-router-dom';

class PostsShow extends Component{
    
    componentDidMount(){
        if(!this.props.post){
            const { id } = this.props.match.params
            this.props.fetchPost(id)
        }
    }

    deleteClick(){
        const { id } = this.props.match.params
        this.props.deletePost(id, ()=>{
            this.props.history.push('/');
        })
        
    }

    render(){
        const post = this.props.post;
        if(!post){
            return <div>Loading</div>
        }
        return(
            <div>
                <Link className="btn btn-primary home"to={'/'}>Back To Home</Link>
                <h3 className="heading">Title: {post.title}</h3>
                <p className="category">Category: {post.categories}</p>
                <p className="content">Post: {post.content}</p>
                <button className="btn btn-danger pull-xs-right" onClick={this.deleteClick.bind(this)}>
                    Delete
                </button>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps){
    return{ post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchPost, deletePost} )(PostsShow);