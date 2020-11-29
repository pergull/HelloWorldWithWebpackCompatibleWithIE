module.exports = {
    
    mode: "development",
    //mode: "production",
    
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      libraryTarget: 'var',
      library: 'main'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
  };