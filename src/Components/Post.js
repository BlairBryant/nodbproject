import React, {Component} from 'react'

export default class Post extends Component {
    constructor() {
        super()

        this.state = {
            editTxt: '',
            inputType: "hidden",
            likes: 0
        }

        this.upDating = this.upDating.bind(this)
        this.upDatingLikes = this.upDatingLikes.bind(this)
        this.decreaseLikes = this.decreaseLikes.bind(this)
    }

    upDating(e) {
        console.log(this.state.inputType, e.key)
        if(e.key === "Enter" && this.state.editTxt){
            this.props.updatePost(this.props.objectOfPost.id, this.state.editTxt, this.state.likes)
            this.setState({inputType: "hidden"})}
    }

    upDatingLikes() {
        this.setState({likes: this.state.likes+1})
        this.props.updatePost(this.props.objectOfPost.id, this.props.objectOfPost.post, this.state.likes+1)
    }

    decreaseLikes() {
        this.setState({likes: this.state.likes-1})
        this.props.updatePost(this.props.objectOfPost.id, this.props.objectOfPost.post, this.state.likes-1)
    }

    render () {
        
        return(
            <div className='post'>
                <div className='likesHolder'>
                    <span className="lnr lnr-chevron-up" onClick={() => this.upDatingLikes()}></span>
                    <p style={this.state.likes > 9 ? ({margin: '1px'}) : ({margin: '5.5px'})}>{this.state.likes}</p>
                    <span className="lnr lnr-chevron-down" onClick={() => this.decreaseLikes()}></span>
                </div>

                <div className='commentHolder'>
                <h2>{this.props.objectOfPost.post}</h2>
                
                <input type={this.state.inputType} placeholder='Edit here!' onChange={(e) => this.setState({editTxt: e.target.value})} 
                onKeyPress={(e) => this.upDating(e)}/>
                                        
                <div>          
                <button onClick={() => this.setState({inputType: "null"})} >Edit</button>
                     
                <button onClick={() => this.props.deletePost(this.props.objectOfPost.id)}>Delete</button>
                </div>
                </div>
                
            </div>
        )
    }
}