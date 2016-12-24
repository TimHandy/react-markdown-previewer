/* 

This file handles the React state, which in this app is the state.text property 

InputMarkup.jsx sets the state as keypresses are made
OutputMarkup.jsx reads the state and updates the dom as each keypress happens.

*/

'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
require('./css/styles.scss')

const InputMarkup = require('InputMarkup')
const OutputMarkup = require('OutputMarkup')

const Main = React.createClass({
    getInitialState: function() {
        return {
            text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n\n *[Google](https://google.com)*"
        }
    },
    handleChange: function(e) {     // the standard is for the function to be called "handle..." and when attached as props to be assigned to "on...". in this case, handleChange and onChange.
        this.setState({text: e.target.value})   // e is for event 
        //console.log(this.state.text)
    },
    render: function() {	
        return (	
            <div className="container">
                
                <div className="column" id="left-column">
                    <InputMarkup onChange={this.handleChange} textValue={this.state.text}/> {/* render InputMarkup component, the text input box */}
                </div>
                    <div className="column" id="right-column">
                    <OutputMarkup markup={this.state.text}/> {/* render OutputMarkup component, the marked up text onto the page */}
                </div>
            </div>
        )
    }
})

ReactDOM.render(
	<Main />, document.getElementById('app')
)
