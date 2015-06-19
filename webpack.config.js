module.exports = {
    context: __dirname ,
    entry: "./src/client.js",
    output: {
        path: __dirname + '/server/public',
        filename: "build.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: "jsx-loader?insertPragma=React.DOM&harmony"}
      ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
