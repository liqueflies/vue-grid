const path = require('path')
const exec = require('child_process').exec
const Express = require('express')

const app = new Express()
const port = 3000

app.use(Express.static('umd'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error)
  } else {
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    )
  }
  /* eslint-enable no-console */
})
