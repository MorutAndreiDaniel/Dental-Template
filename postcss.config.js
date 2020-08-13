module.exports = {
  plugins: [
    require('post-css-uncss')({
        html: [
            './index.html'
            
        ]
    }),
    
  ]
}