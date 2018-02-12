import React, {Component} from 'react'

export default class InputBox extends Component {
    constructor() {
        super()

        this.state = {
            inputTxt: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.makePost = this.makePost.bind(this)
    }

    handleChange(e) {
        this.setState({inputTxt: e.target.value})
    }

    makePost() {
        this.props.createPost(this.state.inputTxt);
        this.setState({inputTxt: ''})
    }

    render () {
        return (
            <div className="inputBox">
                <input value={this.state.inputTxt} placeholder="Write about something" onChange={this.handleChange}/>
                <button onClick={() => this.makePost()}>Post</button>
            </div>
        )
    }

}