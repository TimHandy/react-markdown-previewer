/* 

This file handles the React state, which in this app is the state.text property 

InputMarkup.jsx sets the state as keypresses are made
OutputMarkup.jsx reads the state and updates the dom as each keypress happens.

*/

let React = require('react')
let ReactDOM = require('react-dom')
require('./css/styles.scss')

let InputMarkup = require('InputMarkup')
let OutputMarkup = require('OutputMarkup')

let Main = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        }
    },
    handleChange: function(e) {     // the standard is for the function to be called "handle..." and when attached as props to be assigned to "on...". in this case, handleChange and onChange.
        this.setState({text: e.target.value})   // e is for event 
        //console.log(this.state.text)
    },
    render: function() {	
        return (	
            <div id="container">
                <h1 className="heading">Markdown Previewer</h1>
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
