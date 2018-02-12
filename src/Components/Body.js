import React, {Component} from 'react'
import InputBox from './InputBox'
import PostsBox from './PostsBox'
import axios from 'axios'

export default class Body extends Component {
    constructor () {
        super()

        this.state = {
            posts: [{}]
        }

        this.createPost = this.createPost.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.updatePost = this.updatePost.bind(this)
        this.getLikes = this.getLikes.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/posts`).then(res => {
            this.setState({posts: res.data})
        })
    }

    createPost(txt) {
        let newPost = {post: txt, likes: 0}
  
        axios.post(`/api/posts`, newPost).then(res => {
            this.setState({posts: res.data})
        })
    }

    updatePost(id, txt, likes) {
        axios.put(`/api/posts/${id}`, {post: txt, likes: likes, id: id}).then(res => {
            this.setState({posts: res.data})
        })
    }

    deletePost(id) {
        axios.delete(`/api/posts/${id}`).then(res => {
            this.setState({posts: res.data})
        })
    }

    getLikes(likes) {
        return likes
    }

    render () {
        console.log(this.state.posts)
        return (
            <div className="body">

                <h1>This is a body</h1>
                <InputBox createPost={this.createPost}/>
                <PostsBox postsArray={this.state.posts} 
                          deletePost={this.deletePost} 
                          updatePost={this.updatePost}
                          getLikes={this.getLikes}/>

            </div>

        )
    }

}