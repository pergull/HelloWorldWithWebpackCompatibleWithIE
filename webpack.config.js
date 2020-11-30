module.exports = {
    
    mode: "development",
    //mode: "production",
    
    target: ['web', 'es5'],
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      libraryTarget: 'var',
      library: 'main'
    }
  };
