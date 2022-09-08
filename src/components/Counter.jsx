import React from 'react'

class Counter extends React.Component{
    // props are passed in from the parents from as attributes on the component's tag (just like id, class, etc.)
    constructor(props){
        // call the parent constructor & pass it Counter's props
        super(props)
        // must be called 'state' (built in functionality from React components)
        this.state = {
            count: this.props.start || 0,
            step: this.props.step || 1,
            clickTimes: [],
        }
    }
    handleClick = () => {
        // We cannot mutuate state directly, we must call the this.setState function and pass in updated  key/value pairs
        console.log(this)
        this.setState({
            count: this.state.count + this.state.step,
            clickTimes: [...this.state.clickTimes, new Date()],

        })
    }

    // create a class method, called render b/c that's what react expects
    // we can then use the render method to display HTML for our component
    render = () => {
        return(
            <>
            <h3>{this.props.title}</h3>
            <button onClick={this.handleClick}>Count{this.state.count}</button>
            {/* using map to transform our click time arrary into individual list items to string */}
            <ul>
                {this.state.clickTimes.map((clickTimes, i) => {
                    return <li key={i}>{clickTimes.toString()}</li>
                })}

            </ul>
            </>
        )
    }
}
// default export which will be imported like:
// import WhatEverYouWantToCallIt from 'folder/file.js'
export default Counter; 