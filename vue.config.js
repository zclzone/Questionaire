const { questions } = require('./data.json')
const { provinces } = require('./cities.json')

module.exports = {
  devServer: {
    before (app) {
      app.get('/api/questions', function (req, res) {
        res.json({
          status: 0,
          data: questions
        })
      }),
        app.get('/api/cities', function (req, res) {
          res.json({
            status: 0,
            data: provinces
          })
        })
    }
  }
}