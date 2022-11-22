import React, { Component } from 'react'

class ErrorBoundary extends Component {
    debugger;
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStatefromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        return (this.state.hasError) ? <h1>Something went wrong</h1> : this.props.children

    }
}

export default ErrorBoundary
