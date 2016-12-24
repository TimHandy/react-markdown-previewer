/*
This file updates the page with the markup from the text box. It reads from the state held on the parent component.
*/

'use strict'

const React = require('react')
//let marked = require('marked')  // the markdown converter - don't need this as I used the CDN version... the script tag is in index.html


const OutputMarkup = React.createClass({
    
    render: function() {
        const output = marked(this.props.markup) // convert the input using the 'marked' module. Marked uses Github Flavored Markdown (GFM) by default. (Marked comes from the script tag in index.html. I could have installed via npm as an alternative)
         
        return (	
        <div dangerouslySetInnerHTML={ {__html: output} }>
                {/* this is how to render raw html in React. The output from marked dangerouslySetInnerHTML is a React thing to let you know it could allow XSS attacks*/}
        </div>
        )
    } 
})


module.exports = OutputMarkup
