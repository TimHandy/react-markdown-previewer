let React = require('react')

let InputMarkup = React.createClass({
    render: function() {	
        return (	
        <div>
            <h2 className="sub-heading">Input Markup</h2>
            <textarea id="textInput" ref="formData" value={this.props.textValue} placeholder="Type your raw markdown here" onChange={this.props.onChange}/>
        </div>
        )
    },
 //custom functions
    onTextChange: function(item) {
        let textContent = this.refs.formData.value
        console.log(textContent)
    }
 
})

module.exports = InputMarkup
