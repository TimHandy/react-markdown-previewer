module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname, 
        filename: './dist/bundle.js'
    }, 
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            InputMarkup: 'app/components/InputMarkup.jsx',
            OutputMarkup: 'app/components/OutputMarkup.jsx'
        },
        extensions: ['', '.js', '.jsx']
    }, 
    devtool: 'cheap-module-eval-source-map', 
    module: {
        loaders: [
            {
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }, 
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,  // regex to select only .css files
                loader: 'style-loader!css-loader!sass-loader'			// the sass-loader converts the sass into css, the css-loader puts that css into the javascript, the style-loader then puts the javascript into the DOM. 
            }
        ]
    }
}
