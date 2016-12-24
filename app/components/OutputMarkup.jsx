let React = require('react')
//let marked = require('marked')  // the markdown converter

marked.setOptions({ // these are just the marked default options... it works without this section.
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
})

let OutputMarkup = React.createClass({
    
    render: function() {
        let output = marked(this.props.markup) // convert the input using the 'marked' module
         
        return (	
        <div>
            <h2 className="sub-heading">Markup Output</h2>
            <div dangerouslySetInnerHTML={ {__html: output} } />    {/* this is how to render raw html in react. The output from marked dangerouslySetInnerHTML is a React thing to let you know it could allow XSS attacks*/}
        </div>
        )
    } 
})


module.exports = OutputMarkup
