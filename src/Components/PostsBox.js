import React, {Component} from 'react'
import Post from './Post'


export default class PostsBox extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return(
            <div className="postsBox">
                {this.props.postsArray.sort((a, b) => b.likes - a.likes).map((x, i) => {
                return <Post key={x.id} objectOfPost={x} deletePost={this.props.deletePost} 
                updatePost={this.props.updatePost} getLikes={this.props.getLikes}/>
                })}          
            </div>
        )
    }
}

