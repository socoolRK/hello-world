import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: ''
        }

    }

handleUsernameChange = event => {
    this.setState({
        username: event.target.value
    })
}

handleCommentsChange = event => {
    this.setState({
        comments: event.target.value
    })
}

handleTopicChange = event => {
    this.setState({
        topic: event.target.value
    })
}

handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}
render() {
    return (
        <form onSubmit= {this.handleSubmit}>
            <div>
                <label>username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
            </div>
                <br />
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>
                <br />
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Vue</option>
                    </select>
                </div>
                <button>Submit</button>
        </form>
    )
}
}

export default Form
