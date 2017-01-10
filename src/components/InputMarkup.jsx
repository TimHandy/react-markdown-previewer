/*
This file renders an input text box and updates the state on the parent component defined in app.jsx on every keypress
*/

'use strict'

const React = require('react')

const defaultText = "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"

const InputMarkup = React.createClass({
    render: function() {	
        return (	
        <div>
            <textarea id="textInput" ref="formData" value={this.props.textValue} placeholder="Type your raw markdown here" onChange={this.props.onChange}/>
        </div>
        )
    },
 //custom functions
    // onTextChange: function(item) {
    //     const textContent = this.refs.formData.value
    //     console.log(textContent)
    // }
})

module.exports = InputMarkup
