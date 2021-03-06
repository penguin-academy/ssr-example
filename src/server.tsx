import express from 'express'
import path from 'path'
import React from 'react'
import ReactDomServer from 'react-dom/server'

import Example from './components/Example'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(__dirname + '/../public'))

app.get('/', (req, res) => {
  const reactComp = ReactDomServer.renderToString(<Example />)
  res.render('index', { body: reactComp, bundle: 'home.js' })
})

app.listen(3000, () => console.info('Running on 3000'))
